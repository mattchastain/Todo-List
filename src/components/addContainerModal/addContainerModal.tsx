import { Modal } from '..';

interface AddContainerProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
}

export function AddContainerModal({showModal, setShowModal}: AddContainerProps) {
	return (
		<Modal
			showModal={showModal}
			setShowModal={setShowModal}
		>
			<div><button></button></div>
		</Modal>
	);
}
