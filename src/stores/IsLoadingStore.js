import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Store({
    state: {
      isLoading: false,
    },
    mutations: {
      startLoading (state) {
        state.isLoading = true;
      },
      finishLoading (state) {
        state.isLoading = false;
      },
    },
    getters: {
      isLoading: state => {
        return state.isLoading;
      }
    },
  });
