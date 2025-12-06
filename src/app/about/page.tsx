"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
    const { t, i18n } = useTranslation();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';
    const isRussian = i18n.language === 'ru' || i18n.language === 'ru-RU';

    const courses = t("about.courses", { returnObjects: true }) as string[];
    const businessSolutions = t("about.businessSolutions", { returnObjects: true }) as string[];
    const reasons = t("about.reasons", { returnObjects: true }) as string[];

    return (
        <>
            <Header />
            <main className={`min-h-screen ${isDark ? 'bg-[#0f1729]' : 'bg-white'} px-6 py-12 sm:mt-20 pt-20`}>
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <section className="text-center max-w-4xl mx-auto mb-20">
                        <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {t("about.title")}
                        </h1>
                        <p className={`text-2xl font-semibold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="text-blue-500">JŅŔ FTech</span> {t("about.tagline")}
                        </p>
                        <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t("about.description")}
                        </p>

                        {/* Mission */}
                        <div className={`rounded-3xl p-8 border mb-8 ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-blue-900/10 border-blue-700/30' : 'bg-blue-50 border-blue-200'}`}>
                            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                {t("about.mission")}
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 justify-center">
                                    <ArrowRight className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                    <p className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                        {t("about.missionPoint1")}
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 justify-center">
                                    <ArrowRight className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                    <p className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                        {t("about.missionPoint2")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-20">
                        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            📚 {t("about.educationTitle")}
                        </h2>
                        <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t("about.educationDesc")}
                        </p>

                        <div className={`rounded-3xl p-8 border mb-8 ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {t("about.ourCourses")}
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {courses.map((course, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                                        <span className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                            {course}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`rounded-3xl p-8 border mb-8 italic ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-blue-900/10 border-blue-700/30' : 'bg-blue-50 border-blue-200'}`}>
                            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                &quot;{t("about.educationNote")}&quot;
                            </p>
                        </div>
                    </section>

                    {/* Business Solutions Section */}
                    <section className="mb-20">
                        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            💼 {t("about.businessTitle")}
                        </h2>
                        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t("about.businessDesc")}
                        </p>

                        <div className={`rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {businessSolutions.map((solution, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                        <span className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                            {solution}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="mb-20">
                        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            🚀 {t("about.whyTitle")}
                        </h2>
                        <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {t("about.whyDesc")}
                        </p>

                        <div className={`rounded-3xl p-8 border ${isDark ? 'bg-gradient-to-br from-green-900/20 to-green-900/10 border-green-700/30' : 'bg-green-50 border-green-200'}`}>
                            <ul className="space-y-4">
                                {reasons.map((reason, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                                        <span className={`text-lg ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                                            {reason}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className={`rounded-3xl p-12 text-center border ${isDark ? 'bg-gradient-to-br from-blue-900/30 to-blue-900/10 border-blue-700/30' : 'bg-blue-50 border-blue-200'}`}>
                        <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {t("about.startTitle")}
                        </h2>
                        <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            📌 {t("about.startDesc")}
                        </p>
                        <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            👉 {t("about.startCTA")}
                        </p>
                        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            {isRussian ? 'Записаться на пробный урок' : 'Ба дарси озмоишӣ номнавис шав'}
                        </button>
                    </section>
                </div>
            </main>
        </>
    );
}
