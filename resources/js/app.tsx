import './bootstrap';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MantineProvider } from '@mantine/core';
import { theme } from './core/theme';

import '@mantine/core/styles.css';
import './core/styles/index.scss';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./modules/${name}.tsx`, import.meta.glob('./modules/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <MantineProvider theme={theme}>
        <App {...props} />
      </MantineProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
