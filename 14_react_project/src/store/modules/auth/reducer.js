import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.isLoading = false;
            newState.isLoggedIn = true;

            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...state };
            return newState;
        }

        case types.LOGIN_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.REGISTER_SUCCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }
        
        case types.REGISTER_FAILURE: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        default:
            return state;
    };
}

export default reducer;