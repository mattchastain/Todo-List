import { Circle, CircleCheckBig, EllipsisVertical, Trash2 } from 'lucide-react';
import { Button, Dropdown } from '..';
import {
	onDeleteItem,
	onToggleItemCompleted,
	useContainerStore,
} from '../../lib';

interface ItemProps {
	id: Date;
	title: string;
	completed: boolean;
}

export function Item({ id, title, completed }: ItemProps) {
	const { containers, setContainers } = useContainerStore();

	return (
		<div
			className={`${
				completed ? 'bg-indigo-600' : 'bg-neutral-700'
			} flex items-center justify-between p-1 rounded md:rounded-lg transition-all`}
		>
			<div className='flex items-center gap-2'>
				<Button
					label=''
					onClick={() =>
						onToggleItemCompleted(id, containers, setContainers)
					}
					variant='ghost'
					icon={completed ? CircleCheckBig : Circle}
				/>
				<h1 className=''>{title}</h1>
			</div>
			<Dropdown label='' icon={EllipsisVertical}>
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
