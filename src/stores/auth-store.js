import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => (
    {
      user: null,
    }
  ),
  getters: {
    isLoggedIn: (state) => state.user?.id > 0
  },
  actions: {
    login(data) {
      this.user = data;
    },

    logout() {
      this.user = null;
    },
  },
});
