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

import CofeedImage from '../assets/imgs/cofeed.jpeg'
import EcommerceImage from '../assets/imgs/ecommerce.jpeg'
import MonsterImage from '../assets/imgs/monster.png'
import BostaImage from '../assets/imgs/bosta.jpeg'
import DasboardImage from '../assets/imgs/dashboard.jpeg'

export const SKILLS = [
    { id: 0, name: 'React', icon: ReactIcon },
    { id: 1, name: 'HTML', icon: HTMLIcon },
    { id: 2, name: 'CSS', icon: CSSIcon },
    { id: 3, name: 'Sass', icon: SassIcon },
    { id: 12, name: 'Redux', icon: ReduxIcon },
    { id: 4, name: 'MaterialUI', icon: MaterialUIIcon },
    { id: 5, name: 'JavaScript', icon: JavaScriptIcon },
    { id: 6, name: 'TypeScript', icon: TypeScriptIcon },
    { id: 7, name: 'NodeJS', icon: NodeJSIcon },
    { id: 8, name: 'MongoDB', icon: MongoDBIcon },
    { id: 9, name: 'Python', icon: PythonIcon },
    { id: 10, name: 'Tailwind', icon: TailwindIcon },
    { id: 11, name: 'Firebase', icon: FirebaseIcon },
    { id: 13, name: 'Stripe', icon: StripeIcon },
]

export const EXPERIENCES = [
    {
        id: 0,
        companyName: 'easetechcomp',
        period: 'March 2022 — October 2022',
        jobTitle: 'Full Stack Engineer',
        jobTasks: [
            'Fora Application: sports-related bookings mobile application',
            'Developed dashboard to manage application resources',
            'Developed application programming interface for the application',
            'Implemented server-side application logic and database querying',
            'Libraries & Frameworks: React, NodeJS, Express & MongoDB'
        ]
    },
    {
        id: 1,
        companyName: 'arpuplus',
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
    }
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