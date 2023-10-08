import { FormTitle } from '@/modules/Auth/components/FormTitle/FormTitle';
import { UserModel } from '@/core/models/User.model';
import { useForm, yupResolver } from '@mantine/form';
import { Button, Center, Stack, TextInput } from '@mantine/core';
import { yup } from '@/core/validation';
import { addData, incrementStep } from '@/modules/Auth/pages/InitialRegistration/store';

type Form = Pick<UserModel, 'email' | 'linkedin' | 'telegram' | 'phone'>;

const schema = yup.object().shape({
  email: yup.string().required().email().max(255),
  telegram: yup.string().optional().max(255),
  phone: yup.string().optional().max(30),
  linkedin: yup.string().optional().max(255),
});

export const ContactsTab = () => {
  const { getInputProps, onSubmit } = useForm<Form>({
    validate: yupResolver(schema),
  });

  const handleSubmit = onSubmit(values => {
    addData({
      email: values.email,
      telegram: values.telegram,
      phone: values.phone,
      linkedin: values.linkedin,
    });
    incrementStep();
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormTitle>Контактные данные</FormTitle>
      <Stack gap={8}>
        <TextInput
          label={'E-mail'}
          placeholder={'example@gmail.com'}
          name={'email'}
          withAsterisk
          {...getInputProps('email')}
        />
        <TextInput label={'Telegram'} placeholder={'@nickname'} {...getInputProps('telegram')} />
        <TextInput label={'Номер телефона'} placeholder={''} {...getInputProps('phone')} />
        <TextInput label={'Linkedin'} placeholder={''} {...getInputProps('linkedin')} />
        <Center>
          <Button type={'submit'}>Продолжить</Button>
        </Center>
      </Stack>
    </form>
  );
};
