import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenSlice from '../slice/TokenSlice';
import userSlice from '../slice/UserSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
	user: userSlice.reducer,
	token: tokenSlice.reducer,
})

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
})

export default store;