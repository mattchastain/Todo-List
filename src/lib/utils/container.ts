export const onAddContainer = (
	name: string,
	setContainerName: (name: string) => void,
	setShowAddContainerModal: (show: boolean) => void,
	addContainer: (name: string) => void
) => {
	if (!name) return;
	addContainer(name);
	setContainerName('');
	setShowAddContainerModal(false);
};
