
interface Props {
    label: string;
    details?: string;
    href: string;
}

export default function Button({ label, details, href }: Props) {
    return (
        <a
            class={` mt-auto bg-primary text-base-200 rounded-full font-medium text-xl px-4 py-4`}
            href={href}
        >
            {label} <span class="text-sm">{details}</span>
        </a>
    )
}