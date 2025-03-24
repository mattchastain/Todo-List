import { ContainerType } from '../types';

export const onAddItem = (
	itemName: string,
	setItemName: (name: string) => void,
	setShowModal: (showModal: boolean) => void,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void,
	currentContainerId: Date | undefined
) => {
	if (!itemName) return;
	const id = new Date();
	const container = containers.find(
		(container) => container.id === currentContainerId
	);
	if (!container) return;
	container.items.push({ id, title: itemName, completed: false });
	setContainers([...containers]);
	setItemName('');
	setShowModal(false);
};
