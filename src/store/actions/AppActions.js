import axios from 'axios';
import { DOMAIN, ENDPOINT, AXIOS_OPTIONS } from '../../config.js';
import { SET_INFO } from '../actionTypes';


class AppActions {
    static setInfo(info) {
        return {
            type: SET_INFO,
            info
        }
    }

    static getInfo() {
        console.log('----- getInfo()');
        return async dispatch => {
            let info = await axios.get(`${DOMAIN}:${ENDPOINT}/chain_id`, AXIOS_OPTIONS);
            dispatch(this.setInfo(info.data.result));
        };
    }

    static init() {
        console.log('----- init()');
        return dispatch => {
            return dispatch(AppActions.getInfo());
        };
    }
};

export default AppActions;