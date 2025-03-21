import { LucideIcon } from 'lucide-react';

interface ButtonProps {
	label: string;
	onClick?: (() => void) | undefined;
	fullWidth?: boolean;
	variant?: 'default' | 'ghost';
	disabled?: boolean;
	icon?: LucideIcon;
}
