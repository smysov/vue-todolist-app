import Vue from 'vue';
import Router from 'vue-router';

import NewTask from './pages/NewTask.vue';
import Tasks from './pages/Tasks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'newTask',
      component: NewTask,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    },
  ],
});
