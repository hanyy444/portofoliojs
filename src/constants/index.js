import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as HTMLIcon } from '../assets/icons/html.svg'
import { ReactComponent as CSSIcon } from '../assets/icons/css.svg'
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg'
import { ReactComponent as MaterialUIIcon } from '../assets/icons/mui.svg'
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript.svg'
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript.svg'
import { ReactComponent as NodeJSIcon } from '../assets/icons/nodejs.svg'
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb.svg'
import { ReactComponent as PythonIcon } from '../assets/icons/python.svg'
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg'
import { ReactComponent as FirebaseIcon } from '../assets/icons/firebase.svg'
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg'
import { ReactComponent as StripeIcon } from '../assets/icons/stripe.svg'
import { ReactComponent as NextJSIcon } from '../assets/icons/nextjs.svg'
import { ReactComponent as ShadCNIcon } from '../assets/icons/shadcn.svg'
import { ReactComponent as PrismaIcon } from '../assets/icons/prisma.svg'

import CofeedImage from '../assets/imgs/webp/cofeed.webp'
import EcommerceImage from '../assets/imgs/webp/ecommerce.webp'
import MonsterImage from '../assets/imgs/webp/monster.avif'
import BostaImage from '../assets/imgs/webp/bosta.webp'
import DasboardImage from '../assets/imgs/webp/dashboard.webp'
import EcommerceAdminDashboardImage from '../assets/imgs/webp/e-commerce-admin.webp'
import EcommerceStoreImage from '../assets/imgs/webp/e-commerce-store.webp'

export const SKILLS = [
    { id: 0, name: 'React', icon: ReactIcon },
    { id: 1, name: 'HTML', icon: HTMLIcon },
    { id: 2, name: 'CSS', icon: CSSIcon },
    { id: 3, name: 'Sass', icon: SassIcon },
    { id: 4, name: 'Redux', icon: ReduxIcon },
    { id: 5, name: 'MaterialUI', icon: MaterialUIIcon },
    { id: 6, name: 'JavaScript', icon: JavaScriptIcon },
    { id: 7, name: 'TypeScript', icon: TypeScriptIcon },
    { id: 8, name: 'NodeJS', icon: NodeJSIcon },
    { id: 9, name: 'MongoDB', icon: MongoDBIcon },
    { id: 10, name: 'Python', icon: PythonIcon },
    { id: 11, name: 'Tailwind', icon: TailwindIcon },
    { id: 12, name: 'Firebase', icon: FirebaseIcon },
    { id: 13, name: 'Stripe', icon: StripeIcon },
    { id: 14, name: 'NextJS', icon: NextJSIcon },
    { id: 15, name: 'Prisma', icon: PrismaIcon },
    { id: 16, name: 'ShadCN', icon: ShadCNIcon },
]

export const EXPERIENCES = [
    {
        id: 2,
        companyName: 'cloudypedia',
        location: 'Canada - Remote',
        period: 'September 2023 — current',
        jobTitle: 'Frontend Engineer',
        jobTasks: [
            {
                subtitle: 'Freightslayer: web-based application; freight brokering',
                subTasks: [
                    'Build user interfaces with React & Tailwind',
                    'Create designs and wireframes with Figma',
                    'Restructure navigation handling, organize and refactor codebase',
                    'Optimize for performance and minimize bandwidth'
                ]
            },
            {
                subtitle: 'Complade: web-based application; digital security solutions and guidelines',
                subTasks: [
                    'Creating user interfaces with NextJS & Material UI',
                ]
            },
        ]
    },
    {
        id: 0,
        companyName: 'easetechcomp',
        location: 'Giza',
        period: 'March 2022 — October 2022',
        jobTitle: 'Full Stack Engineer',
        jobTasks: [
            {
                subtitle: 'Fora Application: sports-related bookings mobile application',
                subTasks: [
                    'Developed dashboard to manage application resources',
                    'Implemented server-side application logic, api and database querying',
                    'Libraries & Frameworks: React, NodeJS, Express & MongoDB'
                ]
            }
        ]
    },
    {
        id: 1,
        companyName: 'arpuplus',
        location: 'Giza',
        period: 'August 2020 — October 2020',
        jobTitle: 'Intern',
        jobTasks: [
            "Developed admin dashboard",
            'Developed a configurable windows service to split and filter huge-sized files',
            'Libraries & Frameworks: ASP.NET MVC 5, Entity Framework & Razor Views'

        ]
    },
]

export const PROJECTS = [
    {
        image: EcommerceAdminDashboardImage,
        name: 'Ecommerce Admin Dashboard',
        description: 'E-commerce admin dashboard',
        bgcolor: "#0B1320",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'NextJS', icon: NextJSIcon },
            { name: 'Typescript', icon: TypeScriptIcon },
            { name: 'ShadCN/UI', icon: ShadCNIcon },
            { name: 'PrismaORM', icon: PrismaIcon },
            { name: 'Stripe', icon: StripeIcon },
        ],
        demo: 'https://ecommerce-admin-five-gold.vercel.app/655500866b5675f63ce0f2a9',
        github: 'https://github.com/hanyy444/ecommerce-admin'
    },
    {
        image: MonsterImage,
        name: 'Monster',
        description: 'Landing page',
        bgcolor: "#0B1320",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'Sass', icon: SassIcon },
        ],
        demo: 'https://hanyy444.github.io/monster',
        github: 'https://github.com/hanyy444/monster'
    },
    {
        image: EcommerceImage,
        name: 'Ecommerce',
        description: 'Ecommerce web application',
        bgcolor: "#eee",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'Redux', icon: ReduxIcon },
            { name: 'Sass', icon: SassIcon },
            { name: 'NodeJS', icon: NodeJSIcon },
            { name: 'MongoDB', icon: MongoDBIcon },
            { name: 'Firebase', icon: FirebaseIcon },
            { name: 'Stripe', icon: StripeIcon },
        ],
        demo: 'https://e-commerce-dbec9.web.app',
        github: 'https://github.com/hanyy444/e-commerce',
    },
    {
        image: CofeedImage,
        name: 'Cofeed',
        description: 'Social media web application',
        bgcolor: "#974eaa",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'Redux', icon: ReduxIcon },
            { name: 'Sass', icon: SassIcon },
            { name: 'NodeJS', icon: NodeJSIcon },
            { name: 'MongoDB', icon: MongoDBIcon },
            { name: 'Firebase', icon: FirebaseIcon },
        ],
        demo: 'https://cofeed-d3470.web.app',
        github: 'https://github.com/hanyy444/cofeed'
    },
    {
        image: EcommerceStoreImage,
        name: 'Ecommerce Store',
        description: 'E-commerce store',
        bgcolor: "#0B1320",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'NextJS', icon: NextJSIcon },
            { name: 'Typescript', icon: TypeScriptIcon },
            { name: 'ShadCN/UI', icon: ShadCNIcon },
            { name: 'PrismaORM', icon: PrismaIcon },
            { name: 'Stripe', icon: StripeIcon },
        ],
        demo: 'https://ecommerce-store-omega-brown.vercel.app/',
        github: 'https://github.com/hanyy444/ecommerce-store'
    },
    {
        image: BostaImage,
        name: 'Bosta Delivery Tracker',
        description: 'UI for tracking orders',
        bgcolor: "#d90716",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'Typescript', icon: TypeScriptIcon },
            { name: 'Sass', icon: SassIcon },
        ],
        demo: 'https://bosta-delivery-tracker.vercel.app/',
        github: 'https://github.com/hanyy444/bosta-delivery-tracker'
    },
    {
        image: DasboardImage,
        name: 'Dashboard UI',
        description: 'Modern admin dashboard',
        bgcolor: "#d90716",
        tools: [
            { name: 'React', icon: ReactIcon },
            { name: 'MaterialUI', icon: MaterialUIIcon }
        ],
        demo: 'https://hanyy444.github.io/dashboard/',
        github: 'https://github.com/hanyy444/dashboard'
    },

]

export const CONTACT = {
    name: 'Ahmed Yashar',
    country: 'EGYPT',
    street: '3 Elgergawy, Messaha, Dokki',
    email: 'ahmedhanyyashar@gmail.com',
    successfulEmailMessage: 'Email was sent successfully!',
    failedEmailMessage: 'Failed to send email. Please try again later.',
    popupMessage: 'Ahmed lives here, come over for a cup of coffee :)'
}

export const FOOTER = {
    copyright: 'Designed & Built by Ahmed Hany'
}