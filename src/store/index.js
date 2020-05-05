import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    loading: false
  },
  getters: {
    List: stateParam => stateParam.list,
    Loading: stateParam => stateParam.loading
  },
  actions: {
    ListOfTypes: context => {
      context.commit("Loading", true);
      Axios.get(`${process.env.VUE_APP_ROOT_API}/autocomplete`)
        .then(result => {
          context.commit("List", result.data.Result);
        })
        .catch(() => {
          //error message
        });
      context.commit("Loading", false);
    }
  },
  mutations: {
    List: (stateParam, payload) => {
      const localState = stateParam;
      localState.list = payload;
    },
    Loading: (stateParam, payload) => {
      const localState = stateParam;
      localState.loading = payload;
    }
  }
});
