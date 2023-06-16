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