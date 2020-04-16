import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";
import EventList from "../views/EventList.vue";
import PageNotFoundComponent from "../views/PageNotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "*",
    component: PageNotFoundComponent
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
