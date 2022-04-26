import get from "lodash/get";

export const Profile = (item) => {
  const firstName = get(item, "first_name") || "";
  const lastName = get(item, "last_name") || "";

  return {
    id: get(item, "pk") || "",
    firstName,
    lastName,
    email: get(item, "email") || "",
    fullName: `${firstName} ${lastName}`,
  };
};

export const Tokens = (item) => ({
  accessToken: get(item, "access_token") || "",
  refreshToken: get(item, "refresh_token") || "",
});
