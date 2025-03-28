import { ContainerType } from '../types';

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

export const onDeleteContainer = (
	id: Date,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void
) => {
	setContainers(containers.filter((container) => container.id !== id));
};

export const onDeleteAllContainers = (
	setShowModal: (show: boolean) => void,
	setContainers: (containers: ContainerType[]) => void
) => {
	setContainers([]);
	setShowModal(false);
};

export const onEditContainer = (
	containerId: Date | undefined,
	containers: ContainerType[],
	setContainers: (containers: ContainerType[]) => void,
	newTitle: string,
	setShowModal: (show: boolean) => void
) => {
	if (!containerId) return;
	const container = containers.find(
		(container) => container.id === containerId
	);
	if (!container) return;
	container.title = newTitle;
	setContainers([...containers]);
	setShowModal(false);
};
