import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from '../redux/cartSlice';
import { productsSlice } from "../redux/productsSlice";
import { userSlice } from "../redux/userSlice";
import { persistStore,   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsSlice.reducer,
        user: userSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    }
});

export const persistor = persistStore(store);