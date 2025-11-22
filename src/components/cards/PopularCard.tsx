import Image from 'next/image'
import React from 'react'

interface Props {
    title: string
    description: string
    image: string
    gradient: string
}

const PopularCourseCard = ({ title, description, image, gradient }: Props) => {
    return (
        <div
            className={`rounded-2xl text-white shadow-md hover:scale-[1.02] transition-transform bg-gradient-to-br ${gradient}`}
        >
            <div className="mb-4 flex justify-end">
                <Image src={image} alt={title} width={180} height={180} className="object-cover" />
            </div>
            <h3 className="text-xl font-bold px-6">{title}</h3>
            <p className="mt-2 text-sm px-6 pb-5">{description}</p>
        </div>
    )
}

export default React.memo(PopularCourseCard)
