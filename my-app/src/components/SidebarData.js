import React from "react";
import {FaBars, FaAward, FaBookOpen, FaBriefcase} from 'react-icons/fa';
import {BsGearFill} from 'react-icons/bs';


export const SidebarData = [
    {
        title:"Dashboard",
        icon: <FaBars/>,
        link: "/home"
    },

    {
        title:"Apprenterships",
        icon: <FaAward/>,
        link: "/apprenterships"
    },

    {
        title:"Internships",
        icon: <FaBookOpen/>,
        link: "/internships"
    },

    {
        title:"Jobs",
        icon: <FaBriefcase />,
        link: "/jobs"
    },

    {
        title:"Settings",
        icon: <BsGearFill/>,
        link: "/settings"
    }
];