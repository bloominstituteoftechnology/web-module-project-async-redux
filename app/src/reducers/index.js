import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "./../actions";

const initialState = {
  cryptos: [
    {
      ath: 64805,
      ath_change_percentage: -28.29497,
      ath_date: "2021-04-14T11:54:46.763Z",
      circulating_supply: 18810381,
      current_price: 46599,
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      last_updated: "2021-09-08T19:05:18.599Z",
      market_cap: 874085378723,
      market_cap_rank: 1,
      max_supply: 21000000,
      name: "Bitcoin",
      symbol: "btc",
      total_supply: 21000000,
    },
  ],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        cryptos: [action.payload],
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        cryptos: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
