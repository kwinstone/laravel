import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    brand: ['#e4f4ff', '#cde2ff', '#9ac3ff', '#62a2ff', '#3686ff', '#1874ff', '#006bff', '#005ae5', '#0050ce', '#0045b6'],
  },
  primaryColor: 'brand',
  components: {
    DateInput: {
      defaultProps: {
        valueFormat: 'DD.MM.YYYY',
      },
    },
    Text: {
      styles: {
        lineHeight: 1,
      },
    },
  },
});
