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
    messageError: '',
    messageNotFoundTask: 'No tasks',
  },
  mutations: {
    ADD_TASK({ tasks }, payload) {
      tasks.push(payload);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    DELETE_TASK(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    CHANGE_CLASS_TASK(state, payload) {
      state.column = payload;
    },
    SET_SEARCH(state, payload) {
      state.search = payload;
    },
    SET_MESSAGE_FORM(state) {
      state.messageError = "Title can't be blank";
    },
    DELETE_MESSAGE_FORM(state) {
      state.messageError = '';
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
    setMessageForm({ commit }) {
      commit('SET_MESSAGE_FORM');
    },
    deleteMessageForm({ commit }) {
      commit('DELETE_MESSAGE_FORM');
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
      if (!search) return JSON.parse(localStorage.getItem('tasks')) || tasks;
      const searchLowerCase = search.trim().toLocaleLowerCase();
      const filteredTasks = tasks.filter(
        (task) => task.title.toLocaleLowerCase().indexOf(searchLowerCase) !== -1,
      );
      return filteredTasks;
    },
    getMessage({ messageError }) {
      return messageError;
    },
    getMessageTasks({ messageNotFoundTask }) {
      return messageNotFoundTask;
    },
  },
});
