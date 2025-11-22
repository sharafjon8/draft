'use client'

import { VideoManagerProvider } from '@/context/VideoManagerContext';
import React from 'react';
import LazyVideo from '../LazyVideoProps';
import { testimonialsData } from '@/data/testimonalsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <VideoManagerProvider>
      <section className="py-16 dark:bg-black bg-white">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-5">
          <h2 className="sm:text-3xl text-2xl font-bold text-black dark:text-white">
            {t("thoughtOfGraduates")}
          </h2>
          <p className='sm:text-lg text-sm text-black mt-1 dark:text-white'>{t("descriptionAboutGraduated")}</p>

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
            className="mt-8"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <LazyVideo
                    src={testimonial.videoUrl}
                    name={testimonial.name}
                    id={testimonial.id}
                  />
                  <div className="p-4">
                    <h3 className="text-white text-lg font-semibold text-center">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </VideoManagerProvider>

  );
}