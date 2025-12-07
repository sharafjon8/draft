'use client';

import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import Header from "../../layout/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Briefcase, Award, Zap, CheckCircle } from "lucide-react";
import { courses } from "../../../data/courses";
import { useState, useEffect } from "react";

const iconMap: Record<string, React.ReactNode> = {
    'processor': '⚙️',
    'monitor': '🖥️',
    'memory': '💾',
    'storage': '💿',
};

interface CourseDetailClientProps {
    courseId: number;
}

export default function CourseDetailClient({ courseId }: CourseDetailClientProps) {
    const { i18n } = useTranslation();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const course = courses.find(c => c.id === courseId);
    const isRussian = i18n.language === 'ru' || i18n.language === 'ru-RU';
    const isDark = theme === 'dark';

    if (!mounted || !course) {
        return (
            <>
                <Header />
                <div className={`min-h-screen ${isDark ? 'bg-[#0f1729]' : 'bg-white'} flex items-center justify-center px-6 pt-20`}>
                    <div className="text-center">
                        <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl mb-6`}>{isRussian ? 'Курс не найден' : 'Курс ёфт нашуд'}</p>
                        <Link href="/courses" className="text-blue-400 hover:text-blue-300">
                            {isRussian ? 'Вернуться к курсам' : 'Қайд шудан ба курсҳо'}
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className={`min-h-screen ${isDark ? 'bg-[#0f1729]' : 'bg-white'} px-6 py-12 sm:mt-20 pt-20`}>
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/courses"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        {isRussian ? 'Вернуться к курсам' : 'Қайд шудан ба курсҳо'}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {isRussian ? course.title : course.titleTj}
                            </h1>
                            <p className={`text-xl mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {isRussian ? course.fullDescription : course.fullDescriptionTj}
                            </p>

                            {/* Salary Section */}
                            <div className={`rounded-3xl p-8 border mb-8 ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700' : 'bg-blue-50 border-blue-200'}`}>
                                <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {isRussian ? 'Средние зарплаты в IT-профессиях' : 'Мояҳҳои миёнаи IT-касб'}
                                </h2>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <p className={`text-sm uppercase mb-2 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>JUNIOR</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.junior}</p>
                                    </div>
                                    <div className={`text-center border-l border-r ${isDark ? 'border-gray-700' : 'border-blue-200'}`}>
                                        <p className={`text-sm uppercase mb-2 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>MIDDLE</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.middle}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className={`text-sm uppercase mb-2 font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>SENIOR</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.senior}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section */}
                            {course.skills && course.skills.length > 0 && (
                                <div className={`mb-8 rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-green-900/20 to-green-900/10 border-green-700/30' : 'bg-green-50 border-green-200'}`}>
                                    <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                                        {isRussian ? 'Навыки' : 'Малака'}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {course.skills.map((skill, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                                <span className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                                    {isRussian ? skill.text : skill.textTj}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tools Section */}
                            {course.tools && course.tools.length > 0 && (
                                <div className={`mb-8 rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-gray-800/30 to-gray-900/20 border-gray-700/30' : 'bg-gray-50 border-gray-200'}`}>
                                    <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {isRussian ? 'Инструменты' : 'Асбобҳо'}
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {course.tools.map((tool, idx) => (
                                            <div key={idx} className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-colors ${isDark ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-300 hover:border-gray-400'}`}>
                                                <div className="text-4xl mb-3">{tool.icon}</div>
                                                <p className={`text-sm text-center font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                                    {tool.name}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Requirements Section */}
                            <div className="mb-8">
                                <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    <span className="text-blue-600">Минимальный</span> необходимый <span className="text-blue-600">ноутбук</span> для курса
                                </h2>
                                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {isRussian ? 'Технические требования' : 'Талабаҳои техникӣ'}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={`rounded-2xl p-8 border flex items-center justify-center min-h-80 ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                                        <Image
                                            src="/images/python.png"
                                            alt="Laptop"
                                            width={300}
                                            height={200}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {course.requirements.map((req, idx) => (
                                            <div
                                                key={idx}
                                                className={`p-6 rounded-2xl border-2 border-blue-500/50 ${isDark ? 'bg-gradient-to-br from-blue-900/30 to-blue-900/10' : 'bg-blue-50'}`}
                                            >
                                                <div className="text-3xl mb-3">{iconMap[req.icon] || '🔧'}</div>
                                                <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                    {isRussian ? req.text : req.textTj}
                                                </p>
                                                <p className="text-xs text-blue-400">
                                                    {req.icon === 'processor' && (isRussian ? 'Процессор' : 'Процессор')}
                                                    {req.icon === 'monitor' && (isRussian ? 'Операционная система' : 'Системи амалгари')}
                                                    {req.icon === 'memory' && (isRussian ? 'ОЗУ' : 'ОЗУ')}
                                                    {req.icon === 'storage' && (isRussian ? 'Основная память' : 'Ёди асосӣ')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className={`rounded-3xl p-8 border-2 sticky top-32 ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50' : 'bg-white shadow-lg'}`} style={{ borderColor: course.borderColor }}>
                                <div className="flex items-center justify-center mb-6">
                                    <div className={`w-28 h-28 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                                        <Image
                                            src={course.icon}
                                            alt={isRussian ? course.title : course.titleTj}
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full mb-6 transition-colors">
                                    {isRussian ? 'Записаться на курс' : 'Сабт намудан дар курс'}
                                </button>

                                <div className="space-y-4">
                                    <div className={`flex items-start gap-3 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <Calendar className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Дата начала' : 'Санаи оғоз'}</p>
                                            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{isRussian ? course.startDate : course.startDateTj}</p>
                                        </div>
                                    </div>

                                    <div className={`flex items-start gap-3 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <Zap className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Занятий в неделю' : 'Дарс дар ҳафта'}</p>
                                            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{isRussian ? course.classesPerWeek : course.classesPerWeekTj}</p>
                                        </div>
                                    </div>

                                    <div className={`flex items-start gap-3 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <Briefcase className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Проектов в портфолио' : 'Лоиҳаҳо дар портфолиои'}</p>
                                            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{isRussian ? course.projectCount : course.projectCountTj}</p>
                                        </div>
                                    </div>

                                    <div className={`flex items-start gap-3 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <Users className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Размер группы' : 'Андозаи гурӯҳ'}</p>
                                            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{isRussian ? course.groupSize : course.groupSizeTj}</p>
                                        </div>
                                    </div>

                                    <div className={`flex items-start gap-3 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Сертификат' : 'Сертификат'}</p>
                                            <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{isRussian ? course.certificate : course.certificateTj}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{isRussian ? 'Осталось мест' : 'Ҷойҳои боқимонда'}</p>
                                        <p className="text-blue-400 font-bold text-xl">{isRussian ? course.seatsAvailable : course.seatsAvailableTj}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
