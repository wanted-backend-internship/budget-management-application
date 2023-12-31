import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from '../store/AuthStore.ts';

const routes = [
  {
    path: '/register',
    component: () => import('../views/TheRegister.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/TheLogin.vue'),
  },
  {
    path: '/dash-board',
    component: () => import('../views/DashBoard.vue'),
  },
  {
    path: '/budgets',
    component: () => import('../views/TheBudget.vue'),
  },
  {
    path: '/budgets/total',
    component: () => import('../components/budget/SetBudgetTotal.vue'),
  },
  {
    path: '/budgets/setting',
    component: () => import('../components/budget/CreateBudgets.vue'),
  },
  {
    path: '/budgets/me',
    component: () => import('../components/budget/BudgetDetail.vue'),
  },
  {
    path: '/expenditures',
    component: () => import('../views/TheExpenditure.vue'),
  },
  {
    path: '/expenditures/add',
    component: () => import('../components/expenditure/CreateExpenditure.vue'),
  },
  {
    path: '/expenditures/search',
    component: () => import('../components/expenditure/SearchExpenditure.vue'),
  },
  {
    path: '/expenditures/statistics',
    component: () => import('../views/TheStatistics.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;
