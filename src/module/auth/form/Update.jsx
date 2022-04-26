import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";


const Update = ({
  val,
  onSuccess,
  onError,
  onSettled,
  children,
}) => {

  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.Update({ values });
      return data;
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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
    type: yup.string().required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        firstName: val.firstName || "",
        lastName: val.lastName || "",
        phoneNumber: val.phoneNumber || "",
        type: val.type || "",
      }}
      enableReinitialize
      {...{ validationSchema }}>
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Update;
