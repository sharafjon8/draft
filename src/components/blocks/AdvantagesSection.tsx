'use client';

import { useTranslation } from 'react-i18next';
import AdvantageCard from '../cards/AdvantageCard';

export default function AdvantagesSection() {
    const { t } = useTranslation();
    const advantages = t('advantages', { returnObjects: true }) as {
        icon: string;
        title: string;
        description: string;
    }[];

    return (
        <>
            <h2 className="container max-w-[1400px] mx-auto px-5 sm:text-3xl text-2xl font-bold mb-6 mt-10">
                {t('advantagesMakeUsUniue')}
            </h2>

            <div className="container max-w-[1400px] mx-auto sm:grid sm:grid-cols-4 sm:gap-4 grid grid-cols-1 gap-5 px-5 lg:px-5">
                {advantages.map((advantage, index) => (
                    <AdvantageCard
                        key={index}
                        icon={advantage.icon}
                        title={advantage.title}
                        description={advantage.description}
                    />
                ))}
            </div>
        </>
    );
}
