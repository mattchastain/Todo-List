import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Modal } from '..';
import { isItemNameEmpty } from '../../lib';

interface EditItemModalProps {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	setEditedItemTitle: (title: string) => void;
	onEditItem: () => void;
}

export function EditItemModal({
	showModal,
	setShowModal,
	setEditedItemTitle,
	onEditItem,
}: EditItemModalProps) {
	const [editedTitle, setEditedTitle] = useState<string>('');

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isItemNameEmpty(editedTitle)) return;
			if (e.key === 'Enter') onEditItem();
		},
		[editedTitle, setShowModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h1 className='font-bold'>Edit Task</h1>
			<Input
				type='text'
				name='new task title'
				placeholder='New task name...'
				value={editedTitle}
				onChange={(e) => {
					setEditedTitle(e.target.value);
					setEditedItemTitle(e.target.value);
				}}
			/>
			<Button
				label='Edit Task'
				onClick={() => {
					onEditItem();
				}}
				fullWidth={true}
				disabled={isItemNameEmpty(editedTitle)}
			/>
		</Modal>
	);
}
