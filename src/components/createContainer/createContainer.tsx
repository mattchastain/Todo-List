import { Modal } from '..';

interface CreateContainerProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
}

export function CreateContainer({showModal, setShowModal}: CreateContainerProps) {
	return (
		<Modal
			showModal={showModal}
			setShowModal={setShowModal}
		>
			<div></div>
		</Modal>
	);
}
