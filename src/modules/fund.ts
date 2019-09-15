export default {
  state: {
    fund: null,
  },
  getters: {
    getFund(state:any) {
      return state.fund;
    },
  },
  mutations: {
    setFund(state:any, { fund }:any) {
      state.fund = fund;
    },
  },
  actions: {
    loadFund({ state, commit }:any, { code }:any) {
      return fetch(`https://api.kuvera.in/api/v3/funds/${code}.json`)
        .then(res => res.json())
        .then(res => commit('setFund', {
          fund: res[0],
        }));
    },
  },
};
