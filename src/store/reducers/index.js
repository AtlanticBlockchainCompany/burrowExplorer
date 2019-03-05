import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import AccountReducer from './AccountReducer';

export default combineReducers({
    App: AppReducer,
    Account: AccountReducer
});