import { Head } from '@inertiajs/react';
import { AppShell, Center, Paper } from '@mantine/core';
import { Navbar } from '@/modules/Auth/containers/Navbar';
import { WelcomeTab } from '@/modules/Auth/pages/InitialRegistration/WelcomeTab';
import { PersonalTab } from '@/modules/Auth/pages/InitialRegistration/PersonalTab';
import { useStore } from 'effector-react';
import { $initialRegistration } from '@/modules/Auth/pages/InitialRegistration/store';
import { ContactsTab } from '@/modules/Auth/pages/InitialRegistration/ContactsTab';
import { GradeModel } from '@/core/models/Grade.model';
import { WorkTab } from '@/modules/Auth/pages/InitialRegistration/WorkTab';

interface InitialRegistrationProps {
  grades: Omit<GradeModel, 'created_at' | 'updated_at'>[];
}

const InitialRegistration = ({ grades }: InitialRegistrationProps) => {
  const { step } = useStore($initialRegistration);

  const currentTab: { [key: number]: JSX.Element } = {
    0: <WelcomeTab />,
    1: <PersonalTab />,
    2: <ContactsTab />,
    3: <WorkTab grades={grades} />,
  };

  return (
    <>
      <Head title={'Регистрация'} />
      <AppShell navbar={{ width: 340, breakpoint: 0 }}>
        <Navbar />
        <AppShell.Main>
          <Center mih={'100vh'} w={'100%'}>
            <Paper shadow={'md'} p={14} w={420}>
              {currentTab[step]}
            </Paper>
          </Center>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default InitialRegistration;
