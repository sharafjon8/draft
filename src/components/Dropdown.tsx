"use client";
import React, { useState } from "react";
import { Popover, Space } from "antd";
import Image from "next/image";
import ru from "../../public/images/RU.svg";
import tj from "../../public/images/tj.svg";
import { useTranslation } from "react-i18next";
import "../app/i18n"; // import config here

const languageOptions = [
    { value: "ru", label: <Image src={ru} alt="RU" width={25} height={25} className="m-2" /> },
    { value: "tg", label: <Image src={tj} alt="TJ" width={25} height={25} className="m-2" /> },
];

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const { i18n } = useTranslation();

    const handleLanguageSelect = (langValue: string) => {
        i18n.changeLanguage(langValue);
        setOpen(false);
    };

    const content = (
        <div className="flex items-center">
            {languageOptions.map((lang) => (
                <div
                    key={lang.value}
                    onClick={() => handleLanguageSelect(lang.value)}
                    className={`${i18n.language === lang.value ? "bg-blue-100" : ""}`}
                >
                    {lang.label}
                </div>
            ))}
        </div>
    );

    const getCurrentLanguageLabel = () => {
        const currentLang = languageOptions.find((lang) => lang.value === i18n.language);
        return currentLang ? currentLang.label : languageOptions[0].label;
    };

    return (
        <Space wrap>
            <Popover content={content} trigger="click" open={open} onOpenChange={setOpen}>
                {getCurrentLanguageLabel()}
            </Popover>
        </Space>
    );
}
