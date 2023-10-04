import { Head, Link } from '@inertiajs/react';
import { Box, Button, Center, PasswordInput, Stack, Text, TextInput } from '@mantine/core';

import classes from './styles.module.scss';

interface LoginPageProps {
  forgot_password_link: string;
}

const Login = (props: LoginPageProps) => {
  const { forgot_password_link } = props;

  return (
    <div>
      <Head title={'Авторизация'} />
      <Center className={classes.wrapper}>
        <Box className={classes.form}>
          <Text className={classes.form__title}>Авторизация</Text>
          <Stack gap={14}>
            <TextInput label={'E-mail'} placeholder={'email@example.com'} />
            <PasswordInput label={'Пароль'} placeholder={'*'.repeat(8)} />
          </Stack>

          <Link href={forgot_password_link}>
            <Text className={classes.form__forgotPassword} mt={8}>
              Забыли пароль?
            </Text>
          </Link>

          <Center>
            <Button mt={12}>Войти</Button>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Login;
