import { LucideIcon } from 'lucide-react';

interface ButtonProps {
	label: string;
	onClick?: (() => void) | undefined;
	fullWidth?: boolean;
	variant?: 'default' | 'outline' | 'ghost' | 'danger';
	disabled?: boolean;
	icon?: LucideIcon;
}

export function Button({
	label,
	onClick,
	fullWidth = false,
	variant = 'default',
	disabled = false,
	icon: Icon,
}: ButtonProps) {
	const baseClasses =
		'flex items-center justify-center h-max p-2 md:p-3 gap-2 rounded md:rounded-lg text-xs font-bold md:text-sm md:font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transition-all cursor-pointer';

	const variantClasses = {
		default: 'bg-indigo-600 text-primary hover:bg-indigo-800',
		outline: 'bg-transparent border-2 border-neutral-700 hover:bg-neutral-800/50',
        ghost: 'bg-transparent hover:bg-neutral-800',
        danger: 'bg-red-600 hover:bg-red-800',
	};

	return (
		<button onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''}`}>
			{Icon && <Icon size={18} />}
			{label}
		</button>
	);
}
