import {
  FETCH_MARKETS,
  SUCCESS_MARKETS,
  FAIL_MARKETS
} from '../constants/actions';

export const fetchMarkets = () => {
  return { type: FETCH_MARKETS };
};

export const successMarkets = data => {
  return { type: SUCCESS_MARKETS, payload: { data } };
};

export const failMarkets = () => {
  return { type: FAIL_MARKETS };
};