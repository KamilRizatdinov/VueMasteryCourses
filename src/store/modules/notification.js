export const namespaced = true;

let notificationId = 0;

export const state = {
  notifications: []
};

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({ ...notification, id: notificationId++ });
  },
  DELETE(state, notification) {
    state.notifications = state.notifications.filter(
      item => item.id !== notification.id
    );
  }
};

export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  delete({ commit }, notification) {
    commit("DELETE ", notification);
  }
};
