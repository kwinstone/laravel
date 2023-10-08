import { FormTitle } from '@/modules/Auth/components/FormTitle/FormTitle';
import { GradeModel } from '@/core/models/Grade.model';
import { Button, Flex, Select, Stack, TextInput } from '@mantine/core';
import { WorkType } from '@/core/enums/WorkType.enum';
import { WorkTime } from '@/core/enums/WorkTime.enum';
import { HiredType } from '@/core/enums/HiredType.enum';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { UserModel } from '@/core/models/User.model';
import { $initialRegistration, submitRegistrationForm } from '@/modules/Auth/pages/InitialRegistration/store';
import { useStore } from 'effector-react';

interface WorkTabProps {
  grades: Omit<GradeModel, 'created_at' | 'updated_at'>[];
}

type Form = Pick<UserModel, 'grade' | 'position' | 'work_type' | 'work_time' | 'hired_type' | 'hired_date'>;

export const WorkTab = ({ grades }: WorkTabProps) => {
  const { isLoading } = useStore($initialRegistration);
  const { getInputProps, onSubmit } = useForm<Form>();

  const handleSubmit = onSubmit(values => {
    void submitRegistrationForm(values);
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormTitle>Информация о работе</FormTitle>

      <Stack gap={8} my={12}>
        <Flex gap={12}>
          <Select
            label={'Квалификация'}
            withAsterisk
            w={'49%'}
            data={grades.map(g => ({ value: g.id.toString(), label: g.name }))}
            {...getInputProps('grade')}
          />
          <TextInput label={'Должность'} withAsterisk w={'49%'} placeholder={'CEO'} {...getInputProps('position')} />
        </Flex>

        <Flex gap={12}>
          <Select
            w={'49%'}
            label={'Формат работы'}
            withAsterisk
            data={[
              { label: 'Гибридный', value: WorkType.HYBRID },
              { label: 'Удаленный', value: WorkType.REMOTE },
              { label: 'В офисе', value: WorkType.OFFICE },
            ]}
            {...getInputProps('work_type')}
          />
          <Select
            w={'49%'}
            label={'Занятость'}
            withAsterisk
            data={[
              { label: 'Полная', value: WorkTime.FULL_TIME },
              { label: 'Частичная', value: WorkTime.PART_TIME },
            ]}
            {...getInputProps('work_time')}
          />
        </Flex>
        <Select
          data={[
            {
              label: 'Индивидуальный Предприниматель',
              value: HiredType.INDIVIDUAL,
            },
            { label: 'Трудовой договор', value: HiredType.STATE },
            { label: 'ГПХ', value: HiredType.CIVIL_CONTRACTS },
            { label: 'Аутстафф', value: HiredType.OUTSTAFF },
          ]}
          label={'Тип трудоустройства'}
          withAsterisk
          {...getInputProps('hired_type')}
        />

        <DateInput label={'Дата трудоустройства'} withAsterisk {...getInputProps('hired_date')} />

        <Button type={'submit'} mt={8} loading={isLoading}>
          Зарегестрироваться
        </Button>
      </Stack>
    </form>
  );
};
