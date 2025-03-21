import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ContainerType } from '..';

type ContainerState = {
	containers: ContainerType[];
	setContainers: (containers: ContainerType[]) => void;
	addContainer: (title: string) => void;
};

export const useContainerStore = create<ContainerState>()(
	persist(
		(set) => ({
			containers: [],
			setContainers: (containers) => set({ containers }),
			addContainer: (title) =>
				set((state) => ({
					containers: [...state.containers, {
                        id: new Date(),
                        title,
                        items: [],
                    }],
				})),
		}),
		{ name: 'container-store' }
	)
);
