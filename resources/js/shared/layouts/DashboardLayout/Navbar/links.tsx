import { BsFillPersonFill } from 'react-icons/bs';

export interface Link {
  label: string;
  href: string;
  color: string;
  icon?: JSX.Element;
  nested_links?: Link[];
}

export const links: Link[] = [
  {
    label: 'Панель управления',
    href: '/dashboard',
    color: 'brand',
    icon: <BsFillPersonFill style={{ height: 24, width: 24, fill: 'white' }} />,
    nested_links: [
      {
        label: 'Редактирование профиля',
        href: '/dashboard/profile',
        color: 'brand',
      },
    ],
  },
  {
    label: 'Компания',
    href: '/dashboard/company',
    color: 'red',
  },
];
