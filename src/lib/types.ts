export type ItemType = {
    id: Date;
    title: string;
    complete: boolean;
}

export type ContainerType = {
    id: Date;
    title: string;
    items: ItemType[];
}