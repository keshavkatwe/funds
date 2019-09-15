import fundsMapper from '@/mappers/fundsMapper';

export default {
  state: {
    funds: [],
  },
  getters: {
    getFunds(state:any) {
      return state.funds;
    },
  },
  mutations: {
    setFunds(state:any, { funds }:any) {
      state.funds = funds.map((items:any) => fundsMapper.convertToFund(items));
    },
  },
  actions: {
    loadFunds({ commit }:any) {
      return fetch('https://api.kuvera.in/api/v3/funds.json')
        .then(res => res.json())
        .then(res => commit('setFunds', {
          funds: res,
        }));
    },
  },
};
