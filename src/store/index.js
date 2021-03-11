import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: Math.random()
          .toString(32)
          .toLowerCase()
          .slice(2, 9),
        title: 'Title of first note',
        descr: 'Description of first note',
        priority: 'low',
        date: new Date(Date.now()).toLocaleString(),
      },
      {
        id: Math.random()
          .toString(32)
          .toLowerCase()
          .slice(2, 9),
        title: 'Title of second note',
        descr: 'Description of second note',
        priority: 'low',
        date: new Date(Date.now()).toLocaleString(),
      },
      {
        id: Math.random()
          .toString(32)
          .toLowerCase()
          .slice(2, 9),
        title: 'Title of third note',
        descr: 'Description of third note',
        priority: 'low',
        date: new Date(Date.now()).toLocaleString(),
      },
    ],
  },
  mutations: {
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
  },
  actions: {
    deleteTask({ commit }, payload) {
      commit('deleteTask', payload);
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});
