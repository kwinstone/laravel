import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@mantine/core';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string; phpVersion: string }>) {
  return (
    <>
      <Head title="Вход" />
      <Button>Test</Button>
    </>
  );
}
