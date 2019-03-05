import {
    SET_ACCOUNTS
} from '../actionTypes';

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNTS:
            return {
                list: action.accounts
            };
        default:
            return state;
    }
};