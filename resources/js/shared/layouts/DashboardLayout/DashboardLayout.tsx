import { ReactNode } from 'react';
import { AppShell } from '@mantine/core';
import { Navbar } from './Navbar';
import { Header } from '@/shared/layouts/DashboardLayout/Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 320, breakpoint: 0 }}>
      <Header />
      <Navbar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
