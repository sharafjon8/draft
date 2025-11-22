import type { Metadata } from "next";

interface SEOProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
    keywords?: string;
}

export function generateMetadata({
    title,
    description,
    url = "https://jnrftech.com",
    image = "https://jnrftech.com/images/logo-black.png",
    keywords = "IT курсы, JNR Tech, программирование, веб-разработка, дизайн, SMM, маркетинг, Бохтар",
}: SEOProps): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: "JNR Tech",
            images: [
                {
                    url: "https://jnrftech.com/images/logo-black.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        other: {
            keywords,
        },
        alternates: {
            canonical: url,
        },
    };
}
