import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Modal } from '..';
import { ContainerType, isItemNameEmpty, onAddItem } from '../../lib';

interface AddItemProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	containers: ContainerType[];
	setContainers: (containers: ContainerType[]) => void;
	currentContainerId: Date | undefined;
}

export function AddItemModal({
	showModal,
	setShowModal,
	containers,
	setContainers,
	currentContainerId,
}: AddItemProps) {
	const [itemName, setItemName] = useState<string>('');

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isItemNameEmpty(itemName)) return;
			if (e.key === 'Enter') {
				onAddItem(
					itemName,
					setItemName,
					setShowModal,
					containers,
					setContainers,
					currentContainerId
				);
			}
		},
		[itemName, setShowModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h1 className='font-bold'>Add New Task</h1>
			<Input
				type='text'
				name='task name'
				placeholder='Task name...'
				value={itemName}
				onChange={(e) => setItemName(e.target.value)}
			/>
			<Button
				label='Add Task'
				onClick={() => {
					onAddItem(
						itemName,
						setItemName,
						setShowModal,
						containers,
						setContainers,
						currentContainerId
					);
				}}
				fullWidth={true}
				disabled={isItemNameEmpty(itemName)}
			/>
		</Modal>
	);
}
