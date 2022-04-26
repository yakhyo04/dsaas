import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";
import { get } from "lodash";


const Register = ({
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Register({ values });

      return get(data, "data") || "";
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
      });
    }
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    confirmationPassword: yup
      .string()
      .when("password", (password, field) =>
        password ? field.required().oneOf([yup.ref("password")]) : field
      ),
    password: yup.string().min(6).required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        conformationPassword: "",
      }}
      {...{ validationSchema }}
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Register;
