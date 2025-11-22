import React from 'react'
import { Button } from '../shared/Button'
import Image from 'next/image'

interface CourseCardProps {
    title: string
    description: string
    image: string
}

const CourseCard = ({ title, description, image }: CourseCardProps) => {
    return (
        <div className="group relative w-[450px] bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/30 dark:to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-8">
                <div className="relative mb-6">
                    <div className="rounded-xl flex items-center text-white">
                        <Image src={image} alt={`Курс ${title} – IT Академия JNR Tech`} width={24} height={24} className="object-contain w-[60px]" />
                    </div>

                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg transform translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Популярный
                    </div>
                </div>

                <h2 className="text-2xl font-bold line-clamp-1 text-gray-800 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm line-clamp-1">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="primary" className="flex-1 justify-center !text-white">
                        Подробнее
                    </Button>
                    <Button variant="secondary" className="flex-1 justify-center text-black dark:text-white">
                        Регистрация
                    </Button>
                </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
    )
}

export default React.memo(CourseCard)
