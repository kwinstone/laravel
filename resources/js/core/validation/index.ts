import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Заполните это поле',
  },
  string: {
    email: 'Неверный формат электронной почты',
  },
});

export const yup = Yup;
