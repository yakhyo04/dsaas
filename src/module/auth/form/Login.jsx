import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";

import * as Mappers from "../mappers";
import * as Actions from "../actions";
import * as Api from "../api";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";


const Login = ({
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const dispatch = useDispatch();

  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Login({ values });
      return  Mappers.Tokens(data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    }
  );

  const handleSubmit = (
    values,
    { isSubmitting, setSubmitting }
  ) => {
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onError: () => setSubmitting(false),
        onSuccess: (tokens)=>dispatch(Actions.Login.request({tokens}))
      });
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
      enableReinitialize
      {...{ validationSchema }}>
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Login;
