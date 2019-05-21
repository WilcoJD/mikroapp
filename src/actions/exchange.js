import {
    FETCH_MARKETS,
    SUCCESS_MARKETS,
    FAIL_MARKETS,
    FETCH_MARKET_ORDER_BOOK,
    SUCCESS_MARKET_ORDER_BOOK,
    FAIL_MARKET_ORDER_BOOK
} from '../constants/actions';

export const fetchMarkets = () => {
    return {type: FETCH_MARKETS};
};

export const successMarkets = data => {
    return {type: SUCCESS_MARKETS, payload: {data}};
};

export const failMarkets = () => {
    return {type: FAIL_MARKETS};
};

export const fetchMarketOrderBook = market => {
    return {type: FETCH_MARKET_ORDER_BOOK, payload: {market}};
};

export const successMarketOrderBook = (market, data) => {
    return {type: SUCCESS_MARKET_ORDER_BOOK, payload: {market, data}};
};

export const failMarketOrderBook = market => {
    return {type: FAIL_MARKET_ORDER_BOOK, payload: {market}};
};