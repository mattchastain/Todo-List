import { ItemType } from "../../lib";

interface ContainerProps {
	id: Date;
	title?: string;
    items: ItemType[];
    onDelete: () => void;
}

export function Container({id, title, items, onDelete}: ContainerProps) {
	return <div className=''></div>;
}
