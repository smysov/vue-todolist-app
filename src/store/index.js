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
    ADD_TASK({ tasks }, payload) {
      tasks.push(payload);
    },
    DELETE_TASK(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    CHANGE_CLASS_TASK(state, payload) {
      state.column = payload;
    },
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
  },
  actions: {
    addTask({ commit }, payload) {
      commit('ADD_TASK', payload);
    },
    deleteTask({ commit }, payload) {
      commit('DELETE_TASK', payload);
    },
    setColumn({ commit }, payload) {
      commit('CHANGE_CLASS_TASK', payload);
    },
    setSearch({ commit }, payload) {
      commit('SET_SEARCH', payload);
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
