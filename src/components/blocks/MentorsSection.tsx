'use client'

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export const MentorsSection: FC = () => {
    const { t } = useTranslation()
    const mentors = t('mentors', { returnObjects: true }) as {
        name: string;
        position: string;
        description: string;
        avatar: string;
        phoneNumber: number;
        specialties: string[];
    }[];

    return (
        <section className="mx-auto max-w-[1400px] px-5 lg:px-5">
            <div className="mt-20 mb-8">
                <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white">{t("mentorSection.ourMentors")}</h2>
                <p className="sm:text-lg text-sm mt-1 text-gray-600 dark:text-gray-300">
                    {t("mentorSection.text")}
                </p>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {mentors.map((mentor, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 shadow-lg transition hover:scale-[1.02] m-1 hover:shadow-xl lg:p-8">
                            <div className="flex flex-col items-center text-center text-white p-5 md:p-0">
                                <Image
                                    src={mentor.avatar}
                                    alt={mentor.name}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-white shadow-xl mb-4"
                                />
                                <div className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center -mt-10 mb-2">
                                    <Award className="w-4 h-4" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {mentor.name}
                                </h3>
                                <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-900 text-white text-sm px-4 py-1 rounded-full mb-4">
                                    {mentor.position}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {mentor.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {mentor.specialties.map((spec, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>

    );
};
