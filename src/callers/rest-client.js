import Axios from 'axios';
import toastUtil from 'utilities/toast';
import { useLoadingStore } from 'stores/loading-store';

class RestClient {
  constructor() {
    this.client = this.createAxiosClient();
  }

  createAxiosClient() {
    const axiosInstance = Axios.create({
      // set server url by environment variable
      baseURL: `${import.meta.env.VITE_API_URL}`,
      headers: {
        'Content-type': 'application/json',
      },
      // allow cookies
      withCredentials: true,
    });
    axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
    return axiosInstance;
  }

  onRequest = async (config) => {
    // do something here before request
    return config;
  };

  onRequestError(error) {
    return Promise.reject(error);
  }

  #processThen(response, reject, resolve) {
    const result = response.data;
    // reject if status code abnormal
    if (result.code !== 0 && result.code !== 200) {
      toastUtil.error(result.message);
      reject(result);
    }
    resolve(result);
  }

  #processError(error, reject) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data) {
          // error data from server
          const serviceErrorResponse = error.response.data;
          if (serviceErrorResponse.message) {
            toastUtil.error(serviceErrorResponse.message);
          }
          reject(serviceErrorResponse);
        } else {
          reject(error.response);
        }
      } else {
        toastUtil.error(error.message);
        reject(error);
      }
    } else {
      reject(error);
    }
  }

  request(method, url, data) {
    const loading = useLoadingStore();
    return new Promise((resolve, reject) => {
      // show loading
      loading.show();
      const axiosConfig = {
        url: `${url}`,
        method,
        data,
      };
      this.client
        .request(axiosConfig)
        .then((response) => {
          this.#processThen(response, reject, resolve);
        })
        .catch((error) => {
          // process when error
          this.#processError(error, reject);
        })
        .finally(() => {
          // hide if not multi loading
          if (!loading.isMultiLoading) {
            loading.hide();
          }
        });
    });
  }

  get(url) {
    return this.request('GET', url);
  }

  post(url, data) {
    return this.request('POST', url, data);
  }

  put(url, data) {
    return this.request('PUT', url, data);
  }

  patch(url, data) {
    return this.request('PATCH', url, data);
  }

  delete(url) {
    return this.request('DELETE', url);
  }
}

export default new RestClient();