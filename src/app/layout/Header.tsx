'use client'

import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo-black.png'
import Dropdown from '@/components/Dropdown';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useTranslation()

    const pathname = usePathname();

    const navLinks = [
        { href: "/courses", label: t("coursess") },
        { href: "/services", label: t("services") },
        { href: "/about", label: t("aboutUs") },
    ];

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-lg text-gray-800 dark:text-slate-200">
            <div className="flex items-center justify-between px-6 py-4 sm:px-16">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                        <Image
                            src={logo}
                            alt="Logo"
                            fill
                            className="object-contain dark:invert dark:brightness-0 dark:contrast-100 transition-all duration-300"
                        />
                    </div>
                    <span className="font-bold text-lg">JŅŔ <span className="text-blue-600">FTech</span></span>
                </Link>
                <nav className="hidden md:flex gap-8 text-md font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`transition-colors hover:text-blue-600 ${pathname === href
                                ? "text-blue-600"
                                : "text-black dark:text-white"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:scale-110 transition-all duration-200 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
                    </button>

                    <Dropdown />

                    <button className="px-4 py-2 text-sm border cursor-pointer border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-slate-800 transition-colors">
                        {t("loginIn")}
                    </button>
                </div>

                <button
                    className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-6 pb-4 border-t border-gray-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                    <div className="flex flex-col gap-3 text-sm font-medium pt-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`transition-colors hover:text-blue-600 ${pathname === href
                                    ? "text-blue-600"
                                    : "text-black dark:text-white"
                                    }`}
                            >
                                {label}
                            </Link>
                        ))}

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                            <Dropdown />
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 hover:scale-110 transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
                            </button>
                        </div>

                        <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:text-indigo-400 dark:border-indigo-500 dark:hover:bg-slate-800 transition">
                            {t("loginIn")}
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}