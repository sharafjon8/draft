'use client';

import { useMutation } from '@tanstack/react-query';
import { freeConsultation } from '@/services/api';
import { useForm } from 'react-hook-form';
import { IConsultationRequest } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/whitelogo.png'
import { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IConsultationRequest>();

    const [value, setValue] = useState('+992');

    const { mutate, isPending, isSuccess, isError } = useMutation({
        mutationFn: freeConsultation,
        onSuccess: () => {
            reset();
        },
    });

    const onSubmit = (data: IConsultationRequest) => {
        mutate(data);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        if (!input.startsWith('+992')) {
            setValue('+992');
        } else {
            setValue(input);
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-lg">JŅŔ <span className="text-blue-600">FTech</span></span>
                        </Link>
                        <div>
                            <p className="text-xl font-semibold">{t('footerText')} <br /> {t('footerText2')}</p>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600">
                                <Link href="https://www.instagram.com/jnrftech?igsh=ZW50YmViN3VrMWhy" target='_blank'>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600">
                                <Link href={"https://www.linkedin.com/company/jnrftech/"} target='_blank'>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600">
                                <Link href="https://t.me/jnr_ftech" target='_blank'>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600">
                                <Link href={"https://youtube.com/@jnrftech?si=fY_dusn7MmDYzkzn"} target='_blank'>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600">
                                <Link href={"https://wa.me/qr/ZIXDIX3C3T5PH1"} target='_blank'>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h3 className="text-xl font-semibold mb-6">{t('navigation')}</h3>
                        <nav className="space-y-3 text-gray-300 flex flex-col">
                            <Link href={"/courses"} className="cursor-pointer hover:text-white">{t("coursess")}</Link>
                            <Link href={"/services"} className="cursor-pointer hover:text-white">{t("services")}</Link>
                            <Link href={"/about"} className="cursor-pointer hover:text-white">{t("aboutUs")}</Link>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">{t('freeConsultation')}</h3>
                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="ФИО"
                                    {...register('fullName', {
                                        required: 'Введите имя',
                                        minLength: {
                                            value: 2,
                                            message: 'Имя должно быть не короче 2 символов',
                                        },
                                    })}
                                    className="w-full p-3 rounded-lg placeholder-gray-500 border"
                                />
                                {errors.fullName && <span className="text-red-300 text-sm block mt-1">{errors.fullName.message}</span>}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Номер телефона"
                                    value={value}
                                    {...register('phone', {
                                        required: 'Введите номер телефона',
                                        minLength: {
                                            value: 9,
                                            message: 'Минимум 9 цифр',
                                        },
                                    })}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-lg placeholder-gray-500 border"
                                />
                                {errors.phone && (
                                    <span className="text-red-300 text-sm block mt-1">{errors.phone.message}</span>
                                )}
                            </div>

                            <Button
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isPending}
                                className='w-full'
                            >
                                {isPending ? <>{t('sending')}</> : <>{t('sent')}</>}
                            </Button>
                        </div>

                        {isSuccess && <p className="text-green-400 mt-2">Успешно отправлено!</p>}
                        {isError && <p className="text-red-400 mt-2">Произошла ошибка. Попробуйте снова.</p>}
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6">
                    <p className="text-gray-400 text-sm">{`© JNR FTech, ${new Date().getFullYear()} - Все права защищены.`}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;