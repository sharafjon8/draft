import Image from 'next/image'
import React from 'react'

interface AdvantageCardProps {
    icon: string
    title: string
    description: string
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
    return (
        <div className="container max-w-[1400px] mx-auto group relative bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center flex flex-col items-center transition-transform duration-700 hover:scale-105 hover:shadow-2xl">

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200 dark:from-blue-900 dark:via-indigo-800 dark:to-purple-900 opacity-10 dark:opacity-20 blur-2xl group-hover:opacity-20 dark:group-hover:opacity-40 transition duration-500 z-0 pointer-events-none"></div>

            <div className="relative z-10 bg-gradient-to-br from-indigo-400 to-blue-500 dark:from-indigo-700 dark:to-blue-800 p-4 rounded-full shadow-md animate-[pulse_4s_ease-in-out_infinite]">
                <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white tracking-tight z-10 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-indigo-400">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-slate-200 z-10 max-w-sm leading-relaxed">
                {description}
            </p>

            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-indigo-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 origin-left z-10"></span>
        </div>
    )
}

export default React.memo(AdvantageCard)