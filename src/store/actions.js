export default {
  login(context) {
    context.commit('setAuth', { isLoggedIn: true });
  },

  logout(context) {
    context.commit('setAuth', { isLoggedIn: false });
  }
}
