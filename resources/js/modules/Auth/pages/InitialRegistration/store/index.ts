import { createEffect, createEvent, createStore, sample } from 'effector';
import { UserModel } from '@/core/models/User.model';
import { router } from '@inertiajs/react';
import { showNotification } from '@mantine/notifications';

type Data = Partial<UserModel> & { password?: string };
interface InitialRegistration {
  step: number;
  isLoading: boolean;
  data: Data;
}

export const $initialRegistration = createStore<InitialRegistration>({
  step: 0,
  isLoading: false,
  data: {},
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

export const addData = createEvent<Data>();
$initialRegistration.on(addData, (store, payload) => ({
  ...store,
  data: {
    ...store.data,
    ...payload,
  },
}));

const setStatus = createEvent<boolean>();
$initialRegistration.on(setStatus, (store, payload) => ({
  ...store,
  isLoading: payload,
}));

export const submitRegistrationForm = createEvent<Data>();

const registerUserFx = createEffect(async (payload: Data) => {
  router.post('/initial-registration', payload, {
    onStart: () => setStatus(true),
    onFinish: () => setStatus(false),
    onError: error => {
      console.log(error);
      showNotification({
        color: 'red',
        message: 'Возникла ошибка при регистрации',
      });
    },
  });
});

sample({
  clock: submitRegistrationForm,
  source: $initialRegistration,
  fn: (store, payload) => ({ ...store.data, ...payload }),
  target: registerUserFx,
});
