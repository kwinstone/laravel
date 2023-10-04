import { AppShell, Center, Divider, Flex, Stack, Stepper, Text } from '@mantine/core';
import classes from './styles.module.scss';
import { useStore } from 'effector-react';
import { $initialRegistration, updateStep } from '@/modules/Auth/pages/InitialRegistration/store';

export const Navbar = () => {
  const { step } = useStore($initialRegistration);

  return (
    <AppShell.Navbar className={classes.navbar}>
      <Flex align={'center'} gap={14}>
        <Center bg={'#1371FF'} w={50} h={50} style={{ borderRadius: 12 }}>
          <svg viewBox="0 0 512 441" width={28} height={35} fill={'white'}>
            <path d="M506.077 377.996L476.701 329.16C471.367 320.315 459.866 317.328 450.851 322.727C441.96 328.081 439.075 339.676 444.418 348.577L462.328 378.349C468.749 389.005 461.05 402.637 448.596 402.637H63.404C50.9525 402.637 43.2446 389.016 49.6723 378.349L242.268 58.171C248.487 47.8214 263.519 47.83 269.732 58.171L366.986 219.841C372.34 228.732 383.934 231.628 392.836 226.274C401.727 220.921 404.612 209.326 399.258 200.425L291.232 20.8336C275.266 -5.70963 236.755 -5.74489 220.768 20.8336L5.9233 377.996C-10.5216 405.35 9.22958 440.307 41.1554 440.307H470.845C502.746 440.307 522.53 405.364 506.077 377.996Z" />
          </svg>
        </Center>
        <Text className={classes.navbar__title}>Vacaly</Text>
      </Flex>
      <Divider my={24} />
      <Stack>
        <Stepper active={step} onStepClick={newValue => updateStep(newValue)} orientation="vertical">
          <Stepper.Step label="Этап 1" description="Добро пожаловать" />
          <Stepper.Step label="Этап 2" description="Личная информация" />
          <Stepper.Step label="Этап 3" description="Контактные данные" />
          <Stepper.Step label="Этап 4" description="Информация о работе" />
        </Stepper>
      </Stack>
    </AppShell.Navbar>
  );
};
