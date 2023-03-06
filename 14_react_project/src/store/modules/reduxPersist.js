import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

const persistReducers = (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-ADVANCED',
            storage,
            whitelist: ['auth'],
        },
        reducers
    );

    return persistedReducers;
}

export default persistReducers;