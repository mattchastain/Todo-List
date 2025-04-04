import { AnimatePresence, motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../button/button';

interface DropdownProps {
	label: string;
	icon: LucideIcon;
	position?: 'top' | 'bottom' | 'left' | 'right';
	children: React.ReactNode;
}

export function Dropdown({
	label,
	icon,
	position = 'left',
	children,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	const positionClasses = {
		top: '',
		bottom: 'mt-2 left-1/2 -translate-x-1/2',
		left: 'mr-2 right-full top-0',
		right: '',
	};

	return (
		<>
			<div className={`relative ${isOpen && 'z-20'}`}>
				<Button
					label=''
					onClick={() => setIsOpen(!isOpen)}
					variant='ghost'
					icon={icon}
				/>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className={`absolute bg-neutral-800 border border-neutral-700/80 flex flex-col max-w-3xs gap-2 p-2 rounded-lg md:rounded-xl z-20 ${positionClasses[position]}`}
						>
							{label && (
								<h1 className='text-xs md:text-sm font-bold'>
									{label}
								</h1>
							)}
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-neutral-950/50 backdrop-blur z-10'
						onClick={() => setIsOpen(false)}
					></motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
