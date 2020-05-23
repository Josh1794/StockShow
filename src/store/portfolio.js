import axios from 'axios';

/**
 * ACTION TYPES
 */
const GOT_ALL_PORTFOLIOS = 'GOT_ALL_PORTFOLIOS';
const ADD_PORTFOLIO = 'ADD_PORTFOLIO';
// const DELETE_BOOK = "DELETE_BOOK";

/**
 * ACTION CREATORS
 */
const gotAllPortfolios = (portfolios) => ({
  type: GOT_ALL_PORTFOLIOS,
  portfolios,
});
const addPortfolio = (portfolios) => ({ type: ADD_PORTFOLIO, portfolios });
// const deletedBook = books => ({ type: DELETE_BOOK, books });

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

//DELETE ROUTE NEEDS WORK
// export const deleteBook = () => async dispatch => {
//   try {
//     const { data } = await axios.delete(`/api/books`);
//     dispatch(deletedBook(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

/**
 * INITIAL STATE
 */
const initialState = { portfolios: [] };

/**
 * REDUCER
 */

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_PORTFOLIOS:
      return { ...state, portfolios: [...action.portfolios] };
    case ADD_PORTFOLIO:
      return { ...state, portfolios: [...state.portfolios, action.portfolios] };
    default:
      return state;
  }
}
