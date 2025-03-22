import { Trash2 } from 'lucide-react';
import { Button, Modal } from '..';
import { onDeleteAllContainers } from '../../lib';
import { ContainerType } from '../../lib';

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
			<div className='flex flex-col gap-3 w-full bg-neutral-900/80 border border-neutral-800/80 rounded-md md:rounded-xl p-2 md:p-3 text-center text-xl md:text-2xl'>
				<h1 className='font-bold'>Delete All Containers</h1>
				<Button label='Delete' onClick={() => {onDeleteAllContainers(setShowModal, setContainers)}} icon={Trash2} />
			</div>
		</Modal>
	);
}
