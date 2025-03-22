import { Trash2 } from 'lucide-react';
import { Button, Modal } from '..';
import { ContainerType, onDeleteAllContainers } from '../../lib';

interface DeleteAllContainersProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	setContainers: (containers: ContainerType[]) => void;
}

export function DeleteAllContainersModal({
	showModal,
	setShowModal,
	setContainers,
}: DeleteAllContainersProps) {
	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<h1 className='font-bold'>Delete All Containers</h1>
			<Button
				label='Delete'
				onClick={() => {
					onDeleteAllContainers(setShowModal, setContainers);
				}}
				icon={Trash2}
			/>
		</Modal>
	);
}
