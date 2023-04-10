import React from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BsKanban, BsCartDash} from 'react-icons/bs';

export const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        name: "dashboard3",
        icon: <HiOutlineHome className='icon' />,
    },
    {
        id: 2,
        title: "Transactions",
        name: "Transactions",
        icon: <FaUsers className='icon' />,
    },
    {
        id: 3,
        title: "Schedules",
        name: "Schedules",
        icon: <HiOutlineUsers className='icon' />,
    },
    {
        id: 4,
        title: "Users",
        name: "Users",
        
        icon: <IoStatsChartSharp className='icon' />,
    },
    {
        id: 5,
        title: "Settings",
        name: "Settings",
        icon: <BsKanban className='icon' />,
        
    },

]

