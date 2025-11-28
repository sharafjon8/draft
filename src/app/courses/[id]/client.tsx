'use client';

import { useTranslation } from "react-i18next";
import { courses } from "../../../data/courses";
import Header from "../../layout/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Briefcase, Award, Zap } from "lucide-react";

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

    const course = courses.find(c => c.id === courseId);
    const isRussian = i18n.language === 'ru' || i18n.language === 'ru-RU';

    if (!course) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-[#0f1729] flex items-center justify-center px-6">
                    <div className="text-center">
                        <p className="text-white text-2xl mb-6">{isRussian ? 'Курс не найден' : 'Курс ёфт нашуд'}</p>
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
            <div className="min-h-screen bg-[#0f1729] px-6 py-12 sm:mt-20 pt-20">
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
                            <h1 className="text-5xl font-bold text-white mb-6">
                                {isRussian ? course.title : course.titleTj}
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {isRussian ? course.fullDescription : course.fullDescriptionTj}
                            </p>

                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700 mb-8">
                                <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                                    {isRussian ? 'Средние зарплаты в IT-профессиях' : 'Мояҳҳои миёнаи IT-касб'}
                                </h2>
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm uppercase mb-2 font-semibold">JUNIOR</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.junior}</p>
                                    </div>
                                    <div className="text-center border-l border-r border-gray-700">
                                        <p className="text-gray-400 text-sm uppercase mb-2 font-semibold">MIDDLE</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.middle}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-gray-400 text-sm uppercase mb-2 font-semibold">SENIOR</p>
                                        <p className="text-3xl font-bold text-blue-400">{course.salary.senior}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    <span className="text-blue-400">Минимальный</span> необходимый <span className="text-blue-400">ноутбук</span> для курса
                                </h2>
                                <p className="text-gray-400 mb-6">
                                    {isRussian ? 'Технические требования' : 'Талабаҳои техникӣ'}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 flex items-center justify-center min-h-80">
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
                                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-blue-500/50"
                                            >
                                                <div className="text-3xl mb-3">{iconMap[req.icon] || '🔧'}</div>
                                                <p className="text-sm text-white font-semibold mb-2">
                                                    {isRussian ? req.text : req.textTj}
                                                </p>
                                                {req.icon === 'processor' && <p className="text-xs text-blue-400">{isRussian ? 'Процессор' : 'Процессор'}</p>}
                                                {req.icon === 'monitor' && <p className="text-xs text-blue-400">{isRussian ? 'Операционная система' : 'Системи амалгари'}</p>}
                                                {req.icon === 'memory' && <p className="text-xs text-blue-400">{isRussian ? 'ОЗУ' : 'ОЗУ'}</p>}
                                                {req.icon === 'storage' && <p className="text-xs text-blue-400">{isRussian ? 'Основная память' : 'Ёди асосӣ'}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border-2 sticky top-32" style={{ borderColor: course.borderColor }}>
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-28 h-28 rounded-2xl flex items-center justify-center bg-white/10">
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
                                    <div className="flex items-start gap-3 pb-4 border-b border-gray-700">
                                        <Calendar className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-sm">{isRussian ? 'Дата начала' : 'Санаи оғоз'}</p>
                                            <p className="text-white font-semibold">{isRussian ? course.startDate : course.startDateTj}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 pb-4 border-b border-gray-700">
                                        <Zap className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-sm">{isRussian ? 'Занятий в неделю' : 'Дарс дар ҳафта'}</p>
                                            <p className="text-white font-semibold">{isRussian ? course.classesPerWeek : course.classesPerWeekTj}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 pb-4 border-b border-gray-700">
                                        <Briefcase className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-sm">{isRussian ? 'Проектов в портфолио' : 'Лоиҳаҳо дар портфолиои'}</p>
                                            <p className="text-white font-semibold">{isRussian ? course.projectCount : course.projectCountTj}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 pb-4 border-b border-gray-700">
                                        <Users className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-sm">{isRussian ? 'Размер группы' : 'Андозаи гурӯҳ'}</p>
                                            <p className="text-white font-semibold">{isRussian ? course.groupSize : course.groupSizeTj}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 pb-4 border-b border-gray-700">
                                        <Award className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="text-gray-400 text-sm">{isRussian ? 'Сертификат' : 'Сертификат'}</p>
                                            <p className="text-white font-semibold text-sm">{isRussian ? course.certificate : course.certificateTj}</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <p className="text-gray-400 text-sm mb-2">{isRussian ? 'Осталось мест' : 'Ҷойҳои боқимонда'}</p>
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
