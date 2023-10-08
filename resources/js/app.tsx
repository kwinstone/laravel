import './bootstrap';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MantineProvider } from '@mantine/core';
import 'dayjs/locale/ru';
import { theme } from './core/theme';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './core/styles/index.scss';
import { DatesProvider } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./modules/${name}.tsx`, import.meta.glob('./modules/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <MantineProvider theme={theme}>
        <DatesProvider settings={{ locale: 'ru' }}>
          <App {...props} />
          <Notifications position={'bottom-center'} />
        </DatesProvider>
      </MantineProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
