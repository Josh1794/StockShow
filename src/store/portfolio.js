import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_ALL_PORTFOLIOS = 'GOT_ALL_PORTFOLIOS';
const GOT_SINGLE_PORTFOLIO = 'GOT_SINGLE_PORTFOLIO';
const ADD_PORTFOLIO = 'ADD_PORTFOLIO';

/**
 * ACTION CREATORS
 */
const gotAllPortfolios = (portfolios) => ({
  type: GOT_ALL_PORTFOLIOS,
  portfolios,
});
const gotSinglePortfolio = (portfolios) => ({
  type: GOT_SINGLE_PORTFOLIO,
  portfolios,
});
const addPortfolio = (portfolios) => ({ type: ADD_PORTFOLIO, portfolios });

/**
 * THUNK CREATORS
 */
export const getAllPortfolios = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/portfolios/${userId}`);
    dispatch(gotAllPortfolios(data));
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePortfolio = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/portfolios/single/${id}`);
    dispatch(gotSinglePortfolio(data));
  } catch (err) {
    console.log(err);
  }
};

export const postPortfolio = (name, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/portfolios`, {
        name,
        userId,
      });
      dispatch(addPortfolio(data));
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * INITIAL STATE
 */
const initialState = { portfolios: [], singlePortfolio: {} };

/**
 * REDUCER
 */

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_PORTFOLIOS:
      return { ...state, portfolios: [...action.portfolios] };
    case GOT_SINGLE_PORTFOLIO:
      return { ...state, singlePortfolio: { ...action.portfolios } };
    case ADD_PORTFOLIO:
      return { ...state, portfolios: [...state.portfolios, action.portfolios] };
    default:
      return state;
  }
}
