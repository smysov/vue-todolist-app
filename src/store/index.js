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
    task: {
      title: '',
      descr: '',
      priority: 'low',
    },
    column: false,
    search: '',
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    setColumn(state, payload) {
      state.column = payload;
    },
    setSearch(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    addTask({ commit }, payload) {
      commit('addTask', payload);
    },
    deleteTask({ commit }, payload) {
      commit('deleteTask', payload);
    },
    setColumn({ commit }, payload) {
      commit('setColumn', payload);
    },
    setSearch({ commit }, payload) {
      commit('setSearch', payload);
    },
  },
  getters: {
    getTask({ task }) {
      return task;
    },
    getSearch({ search }) {
      return search;
    },
    getFilteredTasks({ tasks, search }) {
      if (!search) return tasks;
      const searchLowerCase = search.trim().toLocaleLowerCase();
      const filteredTasks = tasks.filter(
        (task) => task.title.toLocaleLowerCase().indexOf(searchLowerCase) !== -1,
      );
      return filteredTasks;
    },
  },
});
