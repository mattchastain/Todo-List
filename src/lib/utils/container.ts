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
