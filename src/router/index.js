import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useAuthStore } from 'stores/auth-store';
import authCaller from 'callers/auth-caller';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { isLoggedIn } = useAuthStore();
  if (!to.meta.requiredAuth) {
    next();
  } else if (!isLoggedIn) {
    const verify = await authCaller.getMe();
    if (verify) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else next();
});

export default router
