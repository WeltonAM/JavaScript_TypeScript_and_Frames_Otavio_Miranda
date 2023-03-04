import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist'

const persistReducers = (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-BASE',
            storage,
            whitelist: ['exampleReducer'],
        },
        reducers
    );

    return persistedReducers;
}

export default persistReducers;