'use client';

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { courses } from "../../data/courses";
import Header from "../layout/Header";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

const CATEGORY_MAP: Record<string, string> = {
    'frontend': 'Фронтенд',
    'backend': 'Бэкенд',
    'mobile': 'Мобильная разработка',
    'kids': 'Дети',
    'olympiad': 'Олимпиада',
    'design': 'Дизайн',
};

export default function CoursesPage() {
    const { i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');
    const [showAll, setShowAll] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const categories = [
        { id: 'all', label: 'Все', labelTj: 'Ҳама' },
        { id: 'frontend', label: 'Фронтенд', labelTj: 'Фронтенд' },
        { id: 'backend', label: 'Бэкенд', labelTj: 'Бэкенд' },
        { id: 'mobile', label: 'Мобильная разработка', labelTj: 'Таҳияи мобилӣ' },
        { id: 'kids', label: 'Дети', labelTj: 'Бачагон' },
        { id: 'olympiad', label: 'Олимпиада', labelTj: 'Олимпиада' },
        { id: 'design', label: 'Дизайн', labelTj: 'Дизайн' },
    ];

    const isRussian = i18n.language === 'ru' || i18n.language === 'ru-RU';

    let filteredCourses = courses;

    if (activeCategory !== 'all') {
        const categoryLabel = CATEGORY_MAP[activeCategory];
        filteredCourses = courses.filter(course => {
            return isRussian ? course.category === categoryLabel : course.categoryTj === CATEGORY_MAP[activeCategory];
        });
    }

    const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#0f1729] px-6 py-12 md:py-10 sm:mt-20 pt-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                        {isRussian ? 'Курсы Академии' : 'Курсҳои Академия'}
                    </h1>
                    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
                        {isRussian
                            ? 'Выберите свой путь обучения и развивайте навыки во Frontend, Backend, мобильной разработке или начните с нашей программы для детей'
                            : 'Роҳи ҳамми худро интихоб кунед ва малака дар Frontend, Backend, таҳияи мобилӣ яе аз барномаи мо барои бачагон оғоз кунед'
                        }
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
                                {isRussian ? category.label : category.labelTj}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedCourses.map((course) => (
                            <Link
                                key={course.id}
                                href={`/courses/${course.id}`}
                                className="block"
                            >
                                <div
                                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full"
                                    style={{
                                        borderColor: course.borderColor,
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-white flex-1">
                                                {isRussian ? course.title : course.titleTj}
                                            </h3>
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 flex-shrink-0 ml-2">
                                                <Image
                                                    src={course.icon}
                                                    alt={isRussian ? course.title : course.titleTj}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                            {isRussian ? course.description : course.descriptionTj}
                                        </p>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <Clock size={16} />
                                                <span>{isRussian ? course.duration : course.durationTj}</span>
                                            </div>
                                            <span className="text-gray-400">{isRussian ? course.category : course.categoryTj}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {!showAll && filteredCourses.length > 6 && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-full hover:bg-white/10 transition-all font-medium"
                            >
                                {isRussian ? `Показать все (${filteredCourses.length - 6} more)` : `Ҳама нишон диҳед (${filteredCourses.length - 6} more)`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
