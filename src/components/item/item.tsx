import { Circle, CircleCheckBig, EllipsisVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button, Dropdown } from '..';
import { onDeleteItem, useContainerStore } from '../../lib';

interface ItemProps {
	id: Date;
	title: string;
	completed: boolean;
	containerId: Date;
}

export function Item({ id, title, completed, containerId }: ItemProps) {
	const { containers, setContainers } = useContainerStore();
	const [isCompleted, setIsCompleted] = useState(completed);

	return (
		<div
			className={`${
				isCompleted ? 'bg-indigo-600' : 'bg-neutral-700'
			} flex items-center justify-between p-1 rounded md:rounded-lg transition-all`}
		>
			<div className='flex items-center gap-2'>
				<Button
					label=''
					onClick={() => setIsCompleted(!isCompleted)}
					variant='ghost'
					icon={isCompleted ? CircleCheckBig : Circle}
				/>
				<h1 className=''>{title}</h1>
			</div>
			<Dropdown label='' icon={EllipsisVertical} position='top'>
				<Button
					label='Delete'
					onClick={() => {
						onDeleteItem(id, containers, setContainers);
					}}
					fullWidth={true}
					variant='danger'
					icon={Trash2}
					dropdownItem={true}
				/>
			</Dropdown>
		</div>
	);
}
