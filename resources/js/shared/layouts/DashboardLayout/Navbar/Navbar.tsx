import { AppShell, Avatar, Box, Group, ScrollArea, Text, UnstyledButton } from '@mantine/core';

import classes from './styles.module.scss';
import { router, usePage } from '@inertiajs/react';
import { BiChevronRight } from 'react-icons/bi';

export const Navbar = () => {
  const {
    auth: { user },
  } = usePage().props;

  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <AppShell.Navbar>
      <ScrollArea className={classes.links}>Links</ScrollArea>
      <Box className={classes.footer}>
        <UnstyledButton className={classes.user} onClick={handleLogout}>
          <Group>
            <Avatar radius="md" color={'brand'}>
              {user.first_name[0]}
              {user.last_name[0]}
            </Avatar>

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                {user.first_name} {user.last_name}
              </Text>

              <Text c="dimmed" size="xs">
                {user.email}
              </Text>
            </div>

            <BiChevronRight style={{ transform: 'scale(1.3)', fill: '#aeafb4' }} />
          </Group>
        </UnstyledButton>
      </Box>
    </AppShell.Navbar>
  );
};
