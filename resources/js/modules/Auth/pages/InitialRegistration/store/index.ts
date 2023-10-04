import { createEvent, createStore } from 'effector';

interface InitialRegistration {
  step: number;
  data: {
    first_name: string;
    last_name: string;
  };
}

export const $initialRegistration = createStore<InitialRegistration>({
  step: 0,
  data: {
    first_name: '',
    last_name: '',
  },
});

export const updateStep = createEvent<number>();
$initialRegistration.on(updateStep, (store, step) => ({
  ...store,
  step,
}));

export const incrementStep = createEvent();
$initialRegistration.on(incrementStep, store => ({
  ...store,
  step: store.step + 1,
}));
