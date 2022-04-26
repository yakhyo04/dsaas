import { http } from "../../services";

export const Login = ({ values }) =>
  http.request.post(`/api/user/auth/login/`, {
    email: values.email,
    password: values.password,
  });

export const Register = ({ values }) =>
  http.request.post(`/v1/oauth/reg`, {
    firstName: values.firstName,
    lastName: values.lastName,
    phone: values.phone,
    email: values.email,
    password: values.password,
    conformationPassword: values.conformationPassword,
  });

export const Profile = () => http.request.get(`/api/user/auth/user/`);

export const Reset = ({ values }) =>
  http.request.post(`/api/user/auth/password/reset/`, {
    email: values.email,
  });

export const Update = ({ values }) =>
  http.request.put(`/api/user/auth/user/`, {
    phone_number: values.phoneNumber,
    type: values.type,
    last_name: values.lastName,
    first_name: values.firstName,
  });

export const UpdatePassword = ({ values }) =>
  http.request.post(`/api/user/auth/password/change/`, {
    password: values.password,
    password1: values.confirmPassword,
  });
