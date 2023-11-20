import api from "./rest-client";

export default {
  getMe: async () => {
    return await api.get('/auth/me');
  }
}