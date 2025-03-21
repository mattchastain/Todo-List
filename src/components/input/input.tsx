import { useEffect, useRef } from 'react';

interface InputProps {
	type: string;
	name: string;
	value?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	type,
	name,
	value = '',
	placeholder = '',
	onChange = () => {},
}: InputProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<input
			ref={inputRef}
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
      className=''
		/>
	);
}
