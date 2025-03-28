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
	return <div>editContainerModal</div>;
}
