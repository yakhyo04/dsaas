import { createTransform, persistReducer } from "redux-persist";
import persistStorage from "redux-persist/lib/storage";
import * as Constants from "./constants";

const initialState = {
  isAuthenticated: false,
  isFetched: true,
  tokens: {
    accessToken: "",
    refreshToken: "",
  },
  profile: {
    id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    fullName: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGOUT.REQUEST: {
      return {
        ...state,
        isFetched: false,
      };
    }
    case Constants.LOGOUT.SUCCESS: {
      return {
        ...state,
        ...initialState,
        tokens: {
          ...state.tokens,
          ...initialState.tokens,
        },
        isAuthenticated: false,
        isFetched: true,
      };
    }
    case Constants.LOGIN.REQUEST: {
      const { tokens } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: false,
        tokens,
      };
    }
    case Constants.PROFILE.REQUEST: {
      const { profile } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        isFetched: true,
        profile,
      };
    }
    default:
      return state;
  }
};

const isFetchedTransform = createTransform(
  (state) => state,
  (isFetched, key, stored) => {
    const tokens = JSON.parse(stored.tokens);

    return !tokens.accessToken;
  },
  { whitelist: ["isFetched"] }
);

const persistConfig = {
  key: "auth",
  storage: persistStorage,
  whitelist: ["isFetched", "tokens", "theme"],
  transforms: [isFetchedTransform],
};

export default persistReducer(persistConfig, reducer);
