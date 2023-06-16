import arcade from './assets/icon-arcade.svg'
import advance from './assets/icon-advanced.svg'
import pro from './assets/icon-pro.svg'

export const navData = [
    {
        id: 1,
        desc: 'your infor',
        href: '/'
    },
    {
        id: 2,
        desc: 'select plan',
        href: '/plan'
    },
    {
        id: 3,
        desc: 'add-ons',
        href: '/add'
    },
    {
        id: 4,
        desc: 'summary',
        href: '/summary'
    }
]

export const planDatas = [
    {
        id: 1,
        title: "Arcade",
        month: "$9/mo",
        year: "$90/yr",
        img: arcade
    },
    {
        id: 2,
        title: "Advanced",
        month: "$12/mo",
        year: "$120/yr",
        img: advance
    },
    {
        id: 3,
        title: "Pro",
        month: "$15/mo",
        year: "$150/yr",
        img: pro
    }
]

export const addOns = [
    {
        id: 1,
        service: "Online service",
        desc: 'Access to multiplayer games',
        month: '+$1/mo',
        year: '+$10/yr'
    },
    {
        id: 2,
        service: "Larger storage",
        desc: 'Extra 1TB of cloud save',
        month: '+$2/mo',
        year: '+$20/yr'
    },
    {
        id: 3,
        service: "Customizable Profile",
        desc: 'Custom theme on your profile',
        month: '+$2/mo',
        year: '+$20/yr'
    }
]