export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="list-none flex gap-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} className="hover:underline">
                            {item.label}
                        </a>
                        {index < items.length - 1 && <span className="mx-1">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
