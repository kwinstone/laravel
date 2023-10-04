import { Text } from '@mantine/core';
import { ReactNode } from 'react';

interface FormTitle {
  children: ReactNode;
}

export const FormTitle = ({ children }: FormTitle) => (
  <Text size={'xl'} fw={500} ta={'center'}>
    {children}
  </Text>
);
