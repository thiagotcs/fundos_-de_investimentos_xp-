import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

export const menuItems = [
  {
    title: 'Fundos',
    icon: <RiIcons.RiRefund2Fill />,
    iconClosed: <IoIcons.IoIosArrowDown />,
    iconOpen: <IoIcons.IoIosArrowUp />,
    submenu: [
      {
        title: 'Alterar regra para aporte',
        icon: <AiIcons.AiFillFund />,
      },
      {
        title: 'Simular aporte',
        icon: <RiIcons.RiBarChart2Fill />,
      },
    ],
  },
];
