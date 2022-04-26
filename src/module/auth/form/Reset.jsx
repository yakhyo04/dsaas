import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Mappers from "../mappers";
import * as Api from "../api";
import { useMutation } from "react-query";


const Reset = ({
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Reset({ values });
      return Mappers.Tokens(data);
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
        onError: () => setSubmitting(false)
      });
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
      }}
      {...{ validationSchema }}>
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Reset;
