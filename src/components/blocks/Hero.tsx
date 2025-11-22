'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Users, Award, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../shared/Button'

export default function Hero() {
    const { t } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const stats = [
        { icon: Users, label: t('stats.students'), value: '100+' },
        { icon: Award, label: t('stats.graduates'), value: '45+' },
        { icon: BookOpen, label: t('stats.courses'), value: '10+' },
    ]

    return (
        <section
            aria-label={t('hero.sectionLabel')}
            className="sm:mt-20 mt-18 sm:p-5 p-0"
        >
            <div
                className="relative sm:rounded-3xl shadow-2xl min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center"
                style={{
                    backgroundImage: 'url(/images/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60 sm:rounded-3xl" />

                <div className="absolute inset-0 opacity-20" aria-hidden="true">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 rounded-full blur-2xl animate-pulse delay-500" />
                </div>

                <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                        <article
                            className={`space-y-6 sm:space-y-8 lg:space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <aside
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
                                aria-live="polite"
                            >
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                {t('hero.enrollmentOpen')}
                            </aside>

                            <header className="space-y-4 sm:space-y-6">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                                    {t('hero.mainText')}
                                </h1>

                                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
                                    {t('hero.confidentFuture')}
                                </p>
                            </header>

                            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6" aria-label={t('hero.ctaNav')}>
                                <Button>
                                    <span className="flex items-center justify-center gap-2 text-white">
                                        {t('hero.enrollNow')}
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </nav>
                        </article>

                        <aside
                            className={`lg:flex lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-8 max-w-sm" role="list" aria-label={t('hero.stats')}>
                                {stats.map(({ icon: Icon, label, value }) => (
                                    <div
                                        key={label}
                                        className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                        role="listitem"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                                                <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                    {value}
                                                </div>
                                                <div className="text-white/70 text-sm font-medium">{label}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}
