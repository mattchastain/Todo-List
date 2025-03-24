export type ItemType = {
    id: Date;
    title: string;
    completed: boolean;
}

export type ContainerType = {
    id: Date;
    title: string;
    items: ItemType[];
}