import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "123", name: "Kamil Rizatdinov" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    events: [
      { id: 1, title: "Event 1", organizer: "true" },
      { id: 2, title: "Event 2", organizer: "false" },
      { id: 3, title: "Event 3", organizer: "true" },
      { id: 4, title: "Event 4", organizer: "false" }
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    }
  },
  modules: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
