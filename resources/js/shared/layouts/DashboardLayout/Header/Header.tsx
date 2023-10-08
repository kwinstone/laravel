import { AppShell, Avatar, Box, Divider, Flex, Kbd, Text, TextInput } from '@mantine/core';

import classes from './styles.module.scss';
import { IoSearchSharp } from 'react-icons/io5';

export const Header = () => {
  return (
    <AppShell.Header>
      <Flex align={'center'}>
        <Flex className={classes.logo}>
          <Avatar color={'brand'} radius={8} className={classes.logo__avatar}>
            EC
          </Avatar>
          <Text className={classes.logo__title}>Example Company</Text>
        </Flex>
        <Divider orientation={'vertical'} />
        <TextInput
          leftSection={<IoSearchSharp />}
          ml={18}
          placeholder={'Поиск...'}
          w={270}
          rightSection={<Kbd>/</Kbd>}
        />
      </Flex>
    </AppShell.Header>
  );
};
