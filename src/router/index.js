import Vue from 'vue';
import VueRouter from 'vue-router';
/* import store from '../store/index';
 */
Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/:id',
    name: 'subGrid',
    component: () =>
      import(/* webpackChunkName: "subGrid" */ '../views/subGrid.vue'),
  },
  {
    path: '/auditi',
    name: 'auditi',
    component: () =>
      import(/* webpackChunkName: "Auditi" */ '../views/Auditi.vue'),
    /*  beforeEnter: (to, from, next) => {
      if (store.state.userDetails.role !== 'prodi') next({ name: 'Home' });
      else next();
    }, */
  },
  {
    path: '/auditi/:id',
    name: 'auditiDetails',

    props: true,
    component: () =>
      import(
        /* webpackChunkName: "AuditiDetails" */ '../views/AuditiDetails.vue'
      ),
    /* beforeEnter: (to, from, next) => {
        if (store.state.userDetails.role !== 'prodi') next({ name: 'Home' });
        else next();
    
    }, */
  },
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import(/* webpackChunkName: "Admin" */ '../views/admin.vue'),
    /* beforeEnter: (to, from, next) => {
      if (store.state.userDetails.role !== 'admin') next({ name: 'Home' });
      else next();
    }, */
  },
  {
    path: '/auditor',
    name: 'auditor',
    component: () =>
      import(/* webpackChunkName: "Auditor" */ '../views/Auditor.vue'),
    /* beforeEnter: (to, from, next) => {
      if (store.state.userDetails.role !== 'auditor') next({ name: 'Home' });
      else next();
    }, */
  },
  {
    path: '/auditor/:id',
    name: 'auditorDetails',
    component: () =>
      import(
        /* webpackChunkName: "AuditorDetails" */ '../views/AuditorDetails.vue'
      ),
    props: true,
    /* beforeEnter: (to, from, next) => {
      if (store.state.userDetails.role !== 'auditor') next({ name: 'Home' });
      else next();
    }, */
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () =>
      import(/* webpackChunkName: "AuditorDetails" */ '../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
