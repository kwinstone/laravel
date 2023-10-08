import { Head, usePage } from '@inertiajs/react';
import { DashboardLayout } from '@/shared/layouts/DashboardLayout';

const RootPage = () => {
  const { props } = usePage();

  return (
    <>
      <Head title={'Панель'} />
      <DashboardLayout>
        <div>Dashboard</div>
      </DashboardLayout>
    </>
  );
};

export default RootPage;
