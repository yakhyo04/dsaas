import * as yup from "yup";
import { Form, Formik } from "formik";
import * as Api from "../api";
import { useMutation } from "react-query";


const UpdatePassword = ({
  onSuccess,
  onError,
  onSettled,
  children,
}) => {
  const mutation = useMutation(
    async (values) => {
      const { data } = await Api.UpdatePassword({ values });
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
    confirmPassword: yup
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
        password: "",
        confirmPassword: "",
      }}
      enableReinitialize
      {...{ validationSchema }}>
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default UpdatePassword;
