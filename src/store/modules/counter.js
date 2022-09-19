export default {
  namespaced: true,

  state: () => (
    {
      counter: 0
    }
  ),

  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },

    normalizedCounter(_state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },

  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },

  actions: {
    increment(context, payload) {
      console.log(context);
      context.commit('increment', payload);
    },
  }
}
