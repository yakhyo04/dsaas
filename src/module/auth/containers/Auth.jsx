import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../actions";
import * as Mappers from "../mappers";
import * as Api from "../api";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state) => state.auth.tokens.accessToken
  );

  useQuery(
    ["auth", "profile", accessToken],
    async () => {
      const { data } = await Api.Profile();

      return Mappers.Profile(data);
    },
    {
      enabled: !!accessToken,
      onSuccess: (profile) => {
        dispatch(Actions.Profile.request({ profile }));
      },
      onError: () => {
        dispatch(Actions.Logout.request());
      },
      retry: false,
    }
  );

  return children;
};

export default Auth;
