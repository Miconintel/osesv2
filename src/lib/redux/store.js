import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// for persistore
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// mine
import menuReducer from './stateSlices/menuSlice';
import styleReducer from './stateSlices/styleSlice';
import cartReducer from './stateSlices/cartSlice';

// create config for the persisted reducer

const persistConfig = {
  key: 'root',
  storage,
};

// combine all your reducers

const rootReducer = combineReducers({
  menuReducer: menuReducer,
  styleReducer: styleReducer,
  cartReducer: cartReducer,
});

// recreate a persisted Reducer using the combined reducers and config

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = function () {
//   return configureStore({
//     reducer: {
//       menuReducer: menuReducer,
//       styleReducer: styleReducer,
//       cartReducer,
//     },
//   });
// };

// create store function, that take in the per03sistedReducer as the reducer object

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// create a persisted store, using
export const persistor = persistStore(store);
