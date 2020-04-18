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
    events: [],
    eventsNumber: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_PAGE_NUMBER(state, number) {
      state.eventsNumber = number;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit("SET_PAGE_NUMBER", response.headers["x-total-count"]);
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log("Error occured while FetchingEvents", error.response);
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
