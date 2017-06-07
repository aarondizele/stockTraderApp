import stocks from '../stocks'

const state = {
  stocks: []
}
const getters = {
  stocks (state) {
    return state.stocks;
  }
}
const mutations = {
  'SET_STOCKS': (state, stocks) => {
    return state.stocks = stocks;
  },
  'RDN_STOCKS': (state) => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    })
  }
}

const actions = {
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStock: ({commit}) => {
    commit('RDN_STOCKS');
  },
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
