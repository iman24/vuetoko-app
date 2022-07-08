import { createStore } from 'vuex'

export default createStore({
  state: {
    carts: []
  },
  getters: {
    cart(state) {
      return state.carts
    }
  },
  mutations: {
    // use store.commit('addCart', data)
    addCart(state, data) {
      let cek = state.carts.findIndex((i) => i.name == data.name)
      if (cek == -1) {
        // if masih kosong kita push aja
        state.carts.push(data)
      } else {
        // add qty
        state.carts[cek].qty++
      }
    },

    removeCart(state, data) {
      let cek = state.carts.findIndex((i) => i.name == data.name)
      if (cek != -1) {
        // if masih kosong kita push aja
        state.carts.splice(cek, 1)
      } 
    },

    clearAll(state) {
      state.carts = []
    }
  },
  actions: {
    // store.dispatch('addCart', data)
    addCart({ commit }, data) {
      commit('addCart', data)
    },
    removeCart({ commit }, data) {
      commit('removeCart', data)
    },
    clearAll({ commit }) {
      commit('clearAll')
    }
  },
  modules: {
  }
})
