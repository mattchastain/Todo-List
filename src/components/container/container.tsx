import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import { Button, Dropdown, Item } from '..';
import { ItemType } from '../../lib';

interface ContainerProps {
	title?: string;
	items: ItemType[];
	onAddItem: () => void;
	onDeleteContainer: () => void;
	setCurrentContainerId: () => void;
	setShowEditContainerModal: () => void;
}

export function Container({
	title,
	items,
	onAddItem,
	onDeleteContainer,
	setCurrentContainerId,
	setShowEditContainerModal,
}: ContainerProps) {
	return (
		<div className='flex flex-col gap-3 w-full h-max bg-neutral-900 border border-neutral-800/80 rounded-md md:rounded-xl p-2 md:p-3'>
			<div className='flex justify-between'>
				<h1 className='font-bold text-xl md:text-2xl'>{title}</h1>
				<Dropdown label='' icon={EllipsisVertical}>
					<Button
						label='Edit'
						onClick={() => {
							setCurrentContainerId();
							setShowEditContainerModal();
						}}
						fullWidth={true}
						variant='default'
						icon={Pencil}
						dropdownItem={true}
					/>
					<Button
						label='Delete'
						onClick={onDeleteContainer}
						fullWidth={true}
						variant='danger'
						icon={Trash2}
						dropdownItem={true}
					/>
				</Dropdown>
			</div>
			{items.map((item) => (
				<Item
					id={item.id}
					title={item.title}
					completed={item.completed}
				/>
			))}
			<Button
				label='Add Task'
				onClick={onAddItem}
				fullWidth={true}
				variant='ghost'
			/>
		</div>
	);
}
