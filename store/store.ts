import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  whitelist: ["todos"],
  storage: storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [...getDefaultMiddleware({serializableCheck: false}), ]
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
