import { Button, Center, Flex, PasswordInput, Select, Stack, TextInput } from '@mantine/core';
import { FormTitle } from '@/modules/Auth/components/FormTitle/FormTitle';
import { useForm, yupResolver } from '@mantine/form';
import { UserModel } from '@/core/models/User.model';
import { countriesList } from '@/core/constants/countries';
import { yup } from '@/core/validation';
import { addData, incrementStep } from '@/modules/Auth/pages/InitialRegistration/store';
import { Sex } from '@/core/enums/Sex.enum';
import { DateInput } from '@mantine/dates';

type Form = Pick<UserModel, 'first_name' | 'last_name' | 'country' | 'city' | 'sex'> & {
  birthday_date?: Date;
  password: string;
  repeat_password: string;
};

const schema = yup.object().shape({
  first_name: yup.string().required().min(2).max(120),
  last_name: yup.string().required().min(2).max(120),
  sex: yup.string().required(),
  birthday_date: yup.date().required(),
  password: yup.string().required().min(8).max(120),
  repeat_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), ''], 'Пароли не совпадают'),
});

export const PersonalTab = () => {
  const { getInputProps, onSubmit } = useForm<Form>({
    validate: yupResolver(schema),
    initialValues: {
      first_name: '',
      last_name: '',
      sex: Sex.MALE,
      birthday_date: undefined,
      password: '',
      repeat_password: '',
    },
  });

  const handleSubmit = onSubmit(values => {
    addData({
      first_name: values.first_name,
      last_name: values.last_name,
      sex: values.sex,
      birthday_date: values.birthday_date,
      password: values.password,
    });
    incrementStep();
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormTitle>Основная информация</FormTitle>
      <Stack gap={8} my={12}>
        <Flex gap={12}>
          <TextInput label={'Имя'} withAsterisk w={'49%'} {...getInputProps('first_name')} />
          <TextInput label={'Фамилия'} withAsterisk w={'49%'} {...getInputProps('last_name')} />
        </Flex>
        <Flex gap={12}>
          <Select
            label={'Пол'}
            w={'49%'}
            withAsterisk
            data={[
              { label: 'Мужской', value: Sex.MALE },
              { label: 'Женский', value: Sex.FEMALE },
              { label: 'Не определен', value: Sex.UNDEFINED },
            ]}
            {...getInputProps('sex')}
          />
          <DateInput label={'Дата рождения'} withAsterisk w={'49%'} {...getInputProps('birthday_date')} />
        </Flex>
        <Flex gap={12}>
          <Select
            label={'Страна'}
            w={'49%'}
            searchable
            data={Object.keys(countriesList).map(c => ({
              label: countriesList[c],
              value: c,
            }))}
            onChange={e => getInputProps('country').onChange(e)}
          />
          <TextInput label={'Город'} w={'49%'} {...getInputProps('city')} />
        </Flex>
        <PasswordInput label={'Пароль'} placeholder={'*'.repeat(8)} withAsterisk {...getInputProps('password')} />
        <PasswordInput
          label={'Повторите пароль'}
          placeholder={'*'.repeat(8)}
          withAsterisk
          {...getInputProps('repeat_password')}
        />
      </Stack>
      <Center>
        <Button type={'submit'}>Продолжить</Button>
      </Center>
    </form>
  );
};
