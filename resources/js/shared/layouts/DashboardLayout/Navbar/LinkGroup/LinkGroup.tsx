import { Link } from '@/shared/layouts/DashboardLayout/Navbar/links';
import { Box, Center, Flex, NavLink, Text } from '@mantine/core';

export const LinkGroup = ({ label, href, color, nested_links, icon }: Link) => {
  return (
    <>
      <Flex my={12} ml={12} align={'center'} gap={8}>
        <Center bg={color} w={40} h={40} style={{ borderRadius: 4 }}>
          {icon}
        </Center>
        <Text fw={500} fs={'xs'}>
          {label}
        </Text>
      </Flex>
      <Box ml={16}>
        {nested_links?.map(l => <LinkGroup key={l.href} label={l.label} href={l.href} color={l.color} />)}
      </Box>
    </>
  );
};
