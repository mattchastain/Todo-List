export const onAddContainer = (
	containerName: string,
	setContainerName: (name: string) => void,
	setShowModal: (show: boolean) => void,
	addContainer: (name: string) => void
) => {
	if (!containerName) return;
	addContainer(containerName);
	setContainerName('');
	setShowModal(false);
};
