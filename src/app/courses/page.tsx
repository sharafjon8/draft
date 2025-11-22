import { courses } from "../../data/courses";
import CourseCard from "../../components/cards/CourseCard";
import Header from "../layout/Header";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
    title: "Наши курсы – IT Академия JNR Tech в Бохтаре",
    description:
        "IT Академия JNR Tech в Бохтаре – обучение и сертификация IT-специалистов. Курсы программирования, веб-разработка, дизайн, SMM и маркетинг в Таджикистане.",
    url: "https://jnrftech.com/courses",
    keywords: "IT курсы, IT курсы Бохтар, JNR Tech, программирование, веб-разработка, дизайн, SMM, маркетинг, Бохтар",
});

export default function CoursesPage() {
    return (
        <>
            <Header />
            <div className="px-6 py-12 md:py-10 sm:mt-20 pt-20">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white">Наши курсы</h1>
                <h6 className="text-center text-gray-800 dark:text-gray-300 mt-2">Выберите направление и начните учиться</h6>

                <div className="flex justify-between flex-wrap gap-5 md:flex md:flex-wrap md:justify-center mt-5">
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            image={course.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
