'use client';
import React from 'react';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/lib/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from "./lib/store";

const StoreProvider = ({ children }) => {
  const storeState = useRef();
  const persistorState = useRef();

  if (!storeState.current) {
    storeState.current = store;
    persistorState.current = persistor;
  }

  return (
    <Provider store={storeState.current}>
      <PersistGate persistor={persistorState.current} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
