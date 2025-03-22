import { AnimatePresence, motion } from 'framer-motion';
import { EllipsisVertical } from 'lucide-react';
import { ItemType } from '../../lib';
import { Button } from '../button/button';

interface ContainerProps {
	id: Date;
	title?: string;
	items: ItemType[];
	onDelete: () => void;
}

export function Container({ id, title, items, onDelete }: ContainerProps) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ scale: 0.7, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.7, opacity: 0 }}
			>
				<div className='flex flex-col gap-3 w-full bg-neutral-900 border border-neutral-800/80 rounded-md md:rounded-xl p-2 md:p-3'>
					<div className='flex items-center justify-between'>
						<h1 className='font-bold text-xl md:text-2xl'>
							{title}
						</h1>
						<Button
							label=''
							variant='ghost'
							icon={EllipsisVertical}
						/>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
