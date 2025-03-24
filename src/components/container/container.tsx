import { AnimatePresence, motion } from 'framer-motion';
import { EllipsisVertical } from 'lucide-react';
import { Button, Item } from '..';
import { ItemType } from '../../lib';

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
					<div className='flex justify-between'>
						<h1 className='font-bold text-xl md:text-2xl'>
							{title}
						</h1>
						<Button
							label=''
							variant='ghost'
							icon={EllipsisVertical}
						/>
					</div>
					{items.map((item) => (
						<Item
							id={item.id}
							title={item.title}
							completed={item.completed}
							containerId={id}
						/>
					))}
					<Button label='Add Task' fullWidth={true} variant='ghost' />
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
