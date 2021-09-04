import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: "",
    smile: [],
    local: JSON.parse(localStorage.getItem("local") || "[] "), //
  },
  mutations: {
    SET_SMILE_TO_STATE: (state, smile) => {
      state.smile = smile;
    },

    PUSHLOCAL(state, local) {
      state.local.push(local); //добавляем
      localStorage.setItem("local", JSON.stringify(state.local)); // сохраняем
    },

    DEL: (state, index) => {
      state.local.splice(index, 1);
    },

    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },

  },
  actions: {
    GET_SMILE_FROM_API({ commit }) {
      return axios("https://v2.jokeapi.dev/joke/Any?amount=10", {
        method: "GET",
      }).then((smile) => {
        commit("SET_SMILE_TO_STATE", smile.data);
      });
    },
    LOCAL({ commit }, local) {
      //
      commit("PUSHLOCAL", local);
    },

    DELETE({ commit }, index) {
      commit("DEL", index);
    },

    GET_SEARCH_VALUE({ commit }, value) {
      commit("SET_SEARCH_VALUE", value);
    },

  },
  
  modules: {},

  getters: {
    local(state) {
      return state.local;
    },

    smile(state) {
      return state.smile;
    },

    searchValue(state) {
      return state.searchValue;
    },

  },
});
