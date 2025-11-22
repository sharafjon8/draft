'use client'
import {
    LucideBook,
    LucideCalendar,
    LucideLaptop,
    LucideRocket,
    LucideUserCheck,
    LucideUsers,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhyChooseUs() {
    const { t } = useTranslation()

    const features = [
        {
            icon: <LucideBook className="text-blue-500 w-6 h-6" />,
            text: t('features.courses'),
        },
        {
            icon: <LucideCalendar className="text-purple-500 w-6 h-6" />,
            text: t('features.schedule'),
        },
        {
            icon: <LucideRocket className="text-green-500 w-6 h-6" />,
            text: t('features.realProjects'),
        },
        {
            icon: <LucideLaptop className="text-yellow-500 w-6 h-6" />,
            text: t('features.exams'),
        },
        {
            icon: <LucideUsers className="text-orange-500 w-6 h-6" />,
            text: t('features.coworking'),
        },
        {
            icon: <LucideUserCheck className="text-cyan-500 w-6 h-6" />,
            text: t('features.teachers'),
        },
    ]

    return (
        <section
            className="container max-w-[1400px] mx-auto mt-20 px-5 lg:px-5"
            aria-labelledby="why-choose-us-title"
        >
            <h2
                id="why-choose-us-title"
                className="sm:text-3xl text-2xl font-extrabold text-gray-900 dark:text-white"
            >
                {t('whyChooseUs.title')}
            </h2>
            <ul className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                    <li
                        key={idx}
                        className="relative group bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 border border-gray-100 dark:border-gray-700 shadow-md dark:shadow-lg rounded-xl p-6 flex items-start gap-4 transition-all duration-500 hover:shadow-xl hover:border-indigo-500"
                    >
                        <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-indigo-500/30 transition duration-500 pointer-events-none"></div>
                        <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-full transition-transform group-hover:scale-110">
                            {feature.icon}
                        </div>
                        <p className="text-gray-800 dark:text-slate-200 text-base leading-snug transition-colors">
                            {feature.text}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
