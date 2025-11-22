'use client'

import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactMapSection = () => {
    const { t } = useTranslation()

    return (
        <div className="container max-w-[1400px] mx-auto mt-10 rounded-xl mb-10 px-5 py-9">
            <h2
                className="text-3xl font-bold text-gray-900 dark:text-white"
            >
                {t('ourAddress')}
            </h2>
            <div className='flex flex-col lg:flex-row gap-6 mt-7'>
                <div className="w-full lg:w-2/3 h-[400px] rounded-xl overflow-hidden">
                    <iframe
                        title="JNR FTech Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4510229791771!2d68.77312267871869!3d37.83979147664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ca1b25697fcab7%3A0xf592e740a9b302a2!2z0JzQtdCz0LDQpNC-0L0!5e0!3m2!1sru!2s!4v1754053689827!5m2!1sru!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{t("phone")}</h3>
                        <p className="text-gray-800 dark:text-gray-300">+992 907 917 918</p>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{t("adressText")}</h3>
                        <p className="text-gray-800 dark:text-gray-300">{t("adress")}</p>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{t("workTime")}</h3>
                        <p className="text-gray-800 dark:text-gray-300">{t("workDay")} - 8:00, 18:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMapSection;
