"use client";

import { useTranslation } from "react-i18next";
import { Code, Palette, Share2, Globe } from "lucide-react";
import Header from "../layout/Header";

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <main className="px-6 py-12 md:py-10 sm:mt-20 pt-20">
                <section className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold mb-6 text-white bg-clip-text">
                        {t("heading")}
                    </h1>
                    <p className="text-sm text-black dark:text-white">
                        {t("intro")}
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-center">
                        {t("directions")}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
                            <Code className="w-10 h-10 text-indigo-500 mb-4" />
                            <h3 className="font-bold mb-2">Python</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t("courses.python.description")}
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
                            <Code className="w-10 h-10 text-green-500 mb-4" />
                            <h3 className="font-bold mb-2">JavaScript</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t("courses.javascript.description")}
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
                            <Code className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="font-bold mb-2">C#</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t("csharpDesc")}
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
                            <Palette className="w-10 h-10 text-pink-500 mb-4" />
                            <h3 className="font-bold mb-2">UI/UX</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t("uiuxDesc")}
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
                            <Share2 className="w-10 h-10 text-purple-500 mb-4" />
                            <h3 className="font-bold mb-2">SMM</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t("courses.smm.description")}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6">{t("why")}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t("description")}
                    </p>
                </section>

                <section className="mb-16 bg-indigo-50 dark:bg-indigo-950 rounded-2xl p-10 text-center">
                    <Globe className="w-12 h-12 text-indigo-600 dark:text-indigo-300 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-4">{t("tajikistan")}</h2>
                </section>
            </main>
        </>
    );
}
