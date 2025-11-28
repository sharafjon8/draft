import { courses } from "../../../data/courses";
import CourseDetailClient from "./client";

export function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id.toString(),
    }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <CourseDetailClient courseId={parseInt(id)} />;
}
