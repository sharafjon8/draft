import { FC } from 'react'
import Image from 'next/image'

interface StatItem {
    icon: string
    value: string
    label: string
}

const stats: StatItem[] = [
    { icon: '/images/books.png', value: '2 год', label: 'опыта преподавания' },
    { icon: '/images/graduation.png', value: '50+', label: 'выпускников' },
    { icon: '/images/briefcase.png', value: '12+', label: 'нашли себе работу в сфере IT' },
    { icon: '/images/like.png', value: '95%', label: 'Рекомендуют нас всегда' },
]

const StatisticsSection: FC = () => {
    return (
        <section className="container max-w-[1400px] mx-auto flex flex-wrap justify-center gap-10 px-6 py-12 rounded-xl transition-colors">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="group flex flex-col items-center bg-white dark:bg-gradient-to-br dark:from-neutral-800 dark:to-slate-800 shadow-md dark:shadow-lg border border-gray-200 dark:border-slate-700 rounded-xl px-6 py-8 w-full sm:w-64 text-center transition-all duration-500 hover:shadow-xl hover:scale-105"
                >
                    <div className="w-28 h-28 relative mb-4 transition-transform group-hover:scale-110">
                        <Image src={stat.icon} alt="icon" fill className="object-contain" />
                    </div>

                    <h3 className="text-2xl font-bold text-blue-600 dark:text-indigo-400">{stat.value}</h3>

                    <p className="mt-2 text-gray-700 dark:text-slate-300 leading-snug text-sm">{stat.label}</p>
                </div>
            ))}
        </section>
    )
}

export default StatisticsSection
