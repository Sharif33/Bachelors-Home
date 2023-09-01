/* eslint-disable no-console */
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import baseAPI from "./base-api";

// ----------------------------------------------------------------------

// The type definition for your state
interface RootStates {
  [baseAPI.reducerPath]: ReturnType<typeof baseAPI.reducer>;
}

const secretKey =
  (import.meta.env.VITE_REDUX_ENCRYPT_KEY as string) ||
  "my-super-secret-key-which-is-very-long-so-that-it-will-be-hard-for-anyone-to-guess-it";

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
  keyPrefix: "redux-",
  whitelist: ["auth", "community"],
  transforms: [
    encryptTransform({
      secretKey,
      onError: (error) => {
        console.error("Error while encrypting data: ", error);
      },
    }),
  ],
};

export const rootReducer = combineReducers<RootStates>({
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const persistedReducer = persistReducer<RootStates>(
  rootPersistConfig,
  rootReducer
);
