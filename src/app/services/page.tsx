import { services } from "../../data/sevices";
import Header from "../layout/Header";
import ServiceCard from "../../components/cards/ServicesCard";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
    title: "Услуги – IT Академия JNR Tech в Бохтаре",
    description: "IT Академия JNR Tech в Бохтаре – обучение и сертификация IT-специалистов. Индивидуальные и групповые решения для обучения и развития навыков в Таджикистане.",
    url: "https://jnrftech.com/services",
});

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="px-6 py-12 md:py-10 sm:mt-20 pt-20">
                <section className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-black dark:text-white">
                        Услуги
                    </h1>
                    <h6 className="mt-4 text-gray-800 dark:text-gray-300">
                        Индивидуальные и групповые решения для обучения и развития навыков
                    </h6>
                </section>

                <section
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8"
                    aria-label="Наши услуги"
                >
                    {services.map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
