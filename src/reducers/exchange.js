import {
    FETCH_MARKETS,
    SUCCESS_MARKETS,
    FAIL_MARKETS,
    FETCH_MARKET_ORDER_BOOK,
    SUCCESS_MARKET_ORDER_BOOK,
    FAIL_MARKET_ORDER_BOOK,
} from '../constants/actions';

const initState = {
    isFetching: false,
    data: [],
    error: '',
};

function exchangeReducer(state = initState, action) {
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
        case FETCH_MARKET_ORDER_BOOK: {
            return { ...state, isFetching: true };
        }
        case SUCCESS_MARKET_ORDER_BOOK: {
            return { ...state, isFetching: false, [action.payload.market]: action.payload.data };
        }
        case FAIL_MARKET_ORDER_BOOK: {
            return { ...state, isFetching: false, [action.payload.market]: [], error: action.payload.error };
        }
        default: {
            return state;
        }
    }
}

export default exchangeReducer;