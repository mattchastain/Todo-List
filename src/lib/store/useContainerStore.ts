import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ContainerType } from '..';

type ContainerState = {
	containers: ContainerType[];
	setContainer: (title: string) => void;
	addContainer: (title: string) => void;
};
