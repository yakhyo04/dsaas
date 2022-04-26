import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: () => "Обязательное поле",
    oneOf: () => "Не соответствует новому паролю",
    string: {
      required: () => "Обязательное поле",
      min: ({ min }) => `Не менее ${min} символов`,
    },
    number: {
      min: ({ path, min }) => `Должен быть больше или равен ${min}`,
      max: ({ path, max }) => `Должен быть меньше или равен ${max}`,
    },
    array: {
      min: ({ min }) => `Должно быть выбрано не менее ${min} элементов`,
      max: ({ max }) => `Должно быть меньше или равно ${max} элементов`,
    },
  },
});

export default yup;
