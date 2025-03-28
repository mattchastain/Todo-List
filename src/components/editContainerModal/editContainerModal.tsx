import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Modal } from '..';
import { isContainerNameEmpty } from '../../lib';

interface EditContainerModalProps {
	containerId: Date | undefined;
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	setEditedContainerTitle: (title: string) => void;
	onEditContainer: () => void;
}

export function EditContainerModal({
	containerId,
	showModal,
	setShowModal,
	setEditedContainerTitle,
	onEditContainer,
}: EditContainerModalProps) {
	const [editedTitle, setEditedTitle] = useState<string>('');

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isContainerNameEmpty(editedTitle)) return;
			if (e.key === 'Enter') onEditContainer();
		},
		[editedTitle, setShowModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h1 className='font-bold'>Edit Container</h1>
			<Input
				type='text'
				name='new container title'
				placeholder='New container name...'
				value={editedTitle}
				onChange={(e) => {
					setEditedTitle(e.target.value);
					setEditedContainerTitle(e.target.value);
				}}
			/>
			<Button
				label='Edit Container'
				onClick={() => {
					onEditContainer();
				}}
				fullWidth={true}
				disabled={isContainerNameEmpty(editedTitle)}
			/>
		</Modal>
	);
}
