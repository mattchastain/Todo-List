import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Modal } from '..';
import { isContainerNameEmpty, onAddContainer } from '../../lib';

interface AddContainerProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	addContainer: (name: string) => void;
}

export function AddContainerModal({
	showModal,
	setShowModal,
	addContainer,
}: AddContainerProps) {
	const [containerName, setContainerName] = useState<string>('');

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (isContainerNameEmpty(containerName)) return;
			if (e.key === 'Enter') {
				onAddContainer(
					containerName,
					setContainerName,
					setShowModal,
					addContainer
				);
			}
		},
		[containerName, setShowModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [onKeyDown]);

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h1 className='font-bold'>Add New Container</h1>
			<Input
				type='text'
				name='container name'
				placeholder='Container name...'
				value={containerName}
				onChange={(e) => setContainerName(e.target.value)}
			/>
			<Button
				label='Add Container'
				onClick={() => {
					onAddContainer(
						containerName,
						setContainerName,
						setShowModal,
						addContainer
					);
				}}
				fullWidth={true}
				disabled={isContainerNameEmpty(containerName)}
			/>
		</Modal>
	);
}
