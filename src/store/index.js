import { createStore } from 'vuex'
import state from "./state"
import * as getters from "./getters"
import * as mutations from "./mutations"
import * as action from "./action"

export default createStore({
  state,
  getters,
  mutations,
  action,
  modules: {},
})
