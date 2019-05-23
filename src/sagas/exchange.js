import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/exchange';
import * as types from '../constants/actions';
import { getMarkets, getMarketOrderBook } from '../api/exchange';


export function* fetchMarkets() {
    try {
        const markets = yield call(getMarkets);
        yield put(actions.successMarkets(markets));
    } catch (e) {
        yield put(actions.failMarkets());
    }
}

export function* fetchMarketOrderBook({ payload: { market } }) {
    try {
        const order_book = yield call(getMarketOrderBook, market);

        yield put(actions.successMarketOrderBook(market, order_book));
    } catch (e) {
        yield put(actions.failMarketOrderBook(market));
    }
}

export function* fetchMarketsSaga() {
    yield takeEvery(types.FETCH_MARKETS, fetchMarkets);
    yield takeEvery(types.FETCH_MARKET_ORDER_BOOK, fetchMarketOrderBook);
}