'use client'
import { useTranslation } from "react-i18next";
import PopularCourseCard from "../cards/PopularCard";

const popularCourses = [
    {
        id: 1,
        titleKey: 'courses.python.title',
        descriptionKey: 'courses.python.description',
        image: '/images/python.png',
        gradient: 'from-cyan-700 to-blue-900',
    },
    {
        id: 2,
        titleKey: 'courses.javascript.title',
        descriptionKey: 'courses.javascript.description',
        image: '/images/js.png',
        gradient: 'from-lime-400 to-green-700',
    },
    {
        id: 3,
        titleKey: 'courses.smm.title',
        descriptionKey: 'courses.smm.description',
        image: '/images/instagram.png',
        gradient: 'from-pink-400 to-purple-700',
    },
];

export default function PopularCourses() {
    const { t } = useTranslation();

    return (
        <section className="mt-20 bg-gray-900 py-10 px-5 lg:px-5">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="sm:text-3xl text-2xl  font-bold text-white pb-5">{t("popularCourses")}</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {popularCourses.map(({ id, titleKey, descriptionKey, image, gradient }) => (
                        <PopularCourseCard
                            key={id}
                            title={t(titleKey)}
                            description={t(descriptionKey)}
                            image={image}
                            gradient={gradient}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
