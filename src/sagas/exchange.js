import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/exchange';
import * as types from '../constants/actions';
import { getMarkets } from '../api/exchange';


export function* fetchMarkets() {
  try {
    const markets = yield call(getMarkets);
    yield put(actions.successMarkets(markets));
  } catch (e) {
    yield put(actions.failMarkets());
  }
}

export function* fetchMarketsSaga() {
  yield takeEvery(types.FETCH_MARKETS, fetchMarkets);
}