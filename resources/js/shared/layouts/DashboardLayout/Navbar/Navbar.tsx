import { AppShell, Avatar, Box, Group, ScrollArea, Text, UnstyledButton } from '@mantine/core';

import classes from './styles.module.scss';
import { router, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { links } from '@/shared/layouts/DashboardLayout/Navbar/links';
import { LinkGroup } from '@/shared/layouts/DashboardLayout/Navbar/LinkGroup';
import { BiChevronRight } from 'react-icons/bi';

export const Navbar = () => {
  const {
    auth: { user },
  } = usePage<PageProps>().props;

  const handleLogout = () => {
    router.post('/logout');
  };

  return (
    <AppShell.Navbar>
      <ScrollArea className={classes.links}>
        {links.map(l => (
          <LinkGroup
            key={l.href}
            label={l.label}
            href={l.href}
            color={l.color}
            icon={l.icon}
            nested_links={l.nested_links}
          />
        ))}
      </ScrollArea>
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
