import axios from 'axios';
import { DOMAIN, ENDPOINT, AXIOS_OPTIONS } from '../../config.js';
import { SET_ACCOUNTS } from '../actionTypes';

class AccountActions {
    static setAccounts(accounts) {
        return {
            type: SET_ACCOUNTS,
            accounts
        };
    }

    static getAccounts() {
        console.log('----- getAccounts()');
        return async dispatch => {
            let accounts = await axios.get(`${DOMAIN}:${ENDPOINT}/accounts`, AXIOS_OPTIONS);
            dispatch(this.setAccounts(accounts.data.result.Accounts));
        };
    }

    static init() {
        console.log('----- init()');
        return dispatch => {
            return dispatch(AccountActions.getAccounts());
        };
    }
};

export default AccountActions;