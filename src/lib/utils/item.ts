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

export const onDeleteItem = (
	itemId: Date,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void
) => {
	if (!itemId) return;
	const container = containers.find((container) =>
		container.items.find((item) => item.id === itemId)
	);
	if (!container) return;
	container.items = container.items.filter((item) => item.id !== itemId);
	setContainers([...containers]);
};

export const onToggleItemCompleted = (
	itemId: Date,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void
) => {
	if (!itemId) return;
	const container = containers.find((container) =>
		container.items.find((item) => item.id === itemId)
	);
	if (!container) return;
	const item = container.items.find((item) => item.id === itemId);
	if (!item) return;
	item.completed = !item.completed;
	setContainers([...containers]);
};

export const onEditItem = (
	itemId: Date | undefined,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void,
	newTitle: string,
	setShowModal: (show: boolean) => void
) => {
	if (!itemId) return;
	const container = containers.find((container) =>
		container.items.find((item) => item.id === itemId)
	);
	if (!container) return;
	const item = container.items.find((item) => item.id === itemId);
	if (!item) return;
	item.title = newTitle;
	setContainers([...containers]);
	setShowModal(false);
};
