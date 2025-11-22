'use client';

import { useState } from "react";
import { courses } from "../../data/courses";
import Header from "../layout/Header";
import Image from "next/image";
import { Clock } from "lucide-react";

const categories = [
    { id: 'all', label: 'Все' },
    { id: 'frontend', label: 'Фронтенд' },
    { id: 'backend', label: 'Бэкенд' },
    { id: 'mobile', label: 'Мобильная разработка' },
    { id: 'kids', label: 'Дети' },
    { id: 'olympiad', label: 'Олимпиада' },
    { id: 'design', label: 'Дизайн' },
];

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [showAll, setShowAll] = useState(false);

    const displayedCourses = showAll ? courses : courses.slice(0, 6);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#0f1729] px-6 py-12 md:py-10 sm:mt-20 pt-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                        Курсы Академии
                    </h1>
                    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
                        Выберите свой путь обучения и развивайте навыки во Frontend, Backend, мобильной
                        разработке или начните с нашей программы для детей
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                                    activeCategory === category.id
                                        ? 'bg-white text-gray-900'
                                        : 'bg-transparent text-gray-300 hover:bg-white/10 border border-gray-600'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedCourses.map((course) => (
                            <div
                                key={course.id}
                                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                                style={{
                                    borderColor: course.borderColor,
                                }}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white">
                                            {course.title}
                                        </h3>
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 flex-shrink-0 ml-2">
                                            <Image
                                                src={course.icon}
                                                alt={course.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Clock size={16} />
                                            <span>{course.duration}</span>
                                        </div>
                                        <span className="text-gray-400">{course.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showAll && courses.length > 6 && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-full hover:bg-white/10 transition-all font-medium"
                            >
                                Показать все ({courses.length - 6} more)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
