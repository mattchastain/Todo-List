interface InputProps {
	type: string;
	name: string;
	value?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input() {
	return <div>input</div>;
}
