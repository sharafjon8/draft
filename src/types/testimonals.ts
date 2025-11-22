export interface Testimonial {
    id: number;
    name: string;
    videoUrl: string;
}

export interface TestimonialsData {
    testimonials: Testimonial[];
}