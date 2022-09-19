import { createStore } from 'vuex'
import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions'
import counter from './modules/counter'

export default createStore({
  modules: {
    counter: counter
  },
  state: {
    isLoggedIn: false
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions
})
