import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}
