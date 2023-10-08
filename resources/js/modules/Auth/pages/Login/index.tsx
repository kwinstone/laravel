import { Head, Link, router } from '@inertiajs/react';
import { Box, Button, Center, PasswordInput, Stack, Text, TextInput } from '@mantine/core';

import classes from './styles.module.scss';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface LoginPageProps {
  forgot_password_link: string;
}

const Login = (props: LoginPageProps) => {
  const { getInputProps, onSubmit, setErrors } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });
  const { forgot_password_link } = props;

  const handleSubmit = onSubmit(values => {
    router.post('/login', values, {
      onSuccess: () => {
        notifications.show({
          color: 'green',
          title: 'Авторизация прошла успешно',
          message: 'Вы вошли в аккаунт',
        });
      },
      onError: err => {
        setErrors(err);
      },
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Head title={'Авторизация'} />
      <Center className={classes.wrapper}>
        <Box className={classes.form}>
          <Text className={classes.form__title}>Авторизация</Text>
          <Stack gap={14}>
            <TextInput label={'E-mail'} name={'email'} placeholder={'email@example.com'} {...getInputProps('email')} />
            <PasswordInput label={'Пароль'} placeholder={'*'.repeat(8)} {...getInputProps('password')} />
          </Stack>

          <Link href={forgot_password_link}>
            <Text className={classes.form__forgotPassword} mt={8}>
              Забыли пароль?
            </Text>
          </Link>

          <Center>
            <Button mt={12} type={'submit'}>
              Войти
            </Button>
          </Center>
        </Box>
      </Center>
    </form>
  );
};

export default Login;
