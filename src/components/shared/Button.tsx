'use client';

import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
};

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const base = 'rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 cursor-pointer',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 cursor-pointer',
        outline: 'border border-gray-400 text-gray-800 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 cursor-pointer',
    };

    const sizes = {
        sm: 'text-sm px-3 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    };

    return (
        <button
            className={clsx(base, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
