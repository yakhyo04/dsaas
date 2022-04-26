import * as Constants from "./constants";
export const Login = {
  request: (args) => ({ type: Constants.LOGIN.REQUEST, payload: args }),
};

export const Profile = {
  request: (args) => ({ type: Constants.PROFILE.REQUEST, payload: args }),
};

export const Logout = {
  request: () => ({ type: Constants.LOGOUT.REQUEST }),
  success: () => ({ type: Constants.LOGOUT.SUCCESS }),
};
