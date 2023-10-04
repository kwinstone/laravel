import { Button, Center, Flex, PasswordInput, Stack, TextInput } from '@mantine/core';
import { FormTitle } from '@/modules/Auth/components/FormTitle/FormTitle';
import { router, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export const PersonalTab = () => {
  const { data, setData, processing, post, errors } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(errors);
    post('/initial-registration');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormTitle>Основная информация</FormTitle>
      <Stack gap={8} my={12}>
        <Flex gap={12}>
          <TextInput
            label={'Имя'}
            withAsterisk
            value={data.first_name}
            error={errors.first_name}
            onChange={e => setData('first_name', e.target.value)}
          />
          <TextInput label={'Фамилия'} withAsterisk value={data.last_name} />
        </Flex>
        <TextInput label={'E-mail'} placeholder={'example@gmail.com'} withAsterisk value={data.email} />
        <PasswordInput label={'Пароль'} placeholder={'*'.repeat(8)} withAsterisk value={data.password} />
        <PasswordInput label={'Повторите пароль'} placeholder={'*'.repeat(8)} withAsterisk />
      </Stack>
      <Center>
        <Button type={'submit'} disabled={processing}>
          Продолжить
        </Button>
      </Center>
    </form>
  );
};
