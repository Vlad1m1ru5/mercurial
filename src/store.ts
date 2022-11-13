import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";

function createStore() {
  const reducer = {
    [api.reducerPath]: api.reducer,
  };

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  return store;
}

export { createStore };
