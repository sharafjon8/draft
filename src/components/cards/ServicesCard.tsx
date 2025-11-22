import React from 'react'

interface ServiceCardProps {
    title: string
    description: string
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 p-6 flex flex-col items-center text-center hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
            <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 10.93C16.16 26.739 20 22.55 20 17V7l-10-5z" />
                    </svg>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {description}
            </p>

        </div>
    )
}

export default React.memo(ServiceCard)