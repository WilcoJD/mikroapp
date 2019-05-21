import { bindActionCreators } from 'redux';
import * as userActions from './user';
import * as walletActions from './wallet';
import * as historyActions from './history';
import * as withdrawActions from './withdraw';
import * as authActions from './auth';
import * as exchangeActions from './exchange';

export default dispatch => ({
    actions: bindActionCreators({
        ...historyActions,
        ...userActions,
        ...walletActions,
        ...withdrawActions,
        ...authActions,
        ...exchangeActions,
    }, dispatch)
});
