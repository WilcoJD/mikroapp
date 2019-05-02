import {
  FETCH_MARKETS,
  SUCCESS_MARKETS,
  FAIL_MARKETS,
} from '../constants/actions';

const initState = {
  isFetching: false,
  data: [],
  error: '',
};

function marketsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_MARKETS: {
      return { ...state, isFetching: true };
    }
    case SUCCESS_MARKETS: {
      return { ...state, isFetching: false, data: action.payload.data };
    }
    case FAIL_MARKETS: {
      return { ...state, isFetching: false, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
}

export default marketsReducer;