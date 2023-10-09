import { Head, usePage } from '@inertiajs/react';
import { DashboardLayout } from '@/shared/layouts/DashboardLayout';
import { Banner } from '@/modules/Dashboard/components/Banner';

const RootPage = () => {
  const { props } = usePage();

  return (
    <>
      <Head title={'Панель'} />
      <DashboardLayout>
        <Banner />
        <div>Dashboard</div>
      </DashboardLayout>
    </>
  );
};

export default RootPage;
