import { useState } from 'react';
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
	const [containerName, setContainerName] = useState('');

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<div className='flex flex-col gap-3 w-full bg-neutral-900/80 rounded-md md:rounded-xl p-2 md:p-3 text-center text-xl md:text-2xl'>
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
			</div>
		</Modal>
	);
}
