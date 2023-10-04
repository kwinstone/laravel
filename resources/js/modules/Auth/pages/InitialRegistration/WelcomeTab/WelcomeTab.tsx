import { Button, Text } from '@mantine/core';
import { FormTitle } from '@/modules/Auth/components/FormTitle/FormTitle';
import { incrementStep } from '@/modules/Auth/pages/InitialRegistration/store';

export const WelcomeTab = () => {
  return (
    <>
      <FormTitle>Добро пожаловать в Vacaly</FormTitle>
      <Text my={16} ta={'center'}>
        Благодарим вас за доверие, для начала работы необходимо зарегистрироваться
      </Text>
      <Button display={'block'} mx={'auto'} onClick={() => incrementStep()}>
        Перейти к регистрации
      </Button>
    </>
  );
};
