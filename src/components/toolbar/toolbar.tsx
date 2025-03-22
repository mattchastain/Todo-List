import { CirclePlus, Eraser } from 'lucide-react';
import { Button } from '..';

interface ToolbarProps {
	setShowAddContainerModal: (value: boolean) => void;
    setShowDeleteAllContainerModal: (value: boolean) => void;
}

export function Toolbar({ setShowAddContainerModal, setShowDeleteAllContainerModal }: ToolbarProps) {
	return (
		<div className='w-max mx-auto flex gap-3 bg-neutral-900 border border-neutral-800/80 rounded-md md:rounded-xl p-2'>
			<Button
				label=''
				icon={CirclePlus}
				onClick={() => setShowAddContainerModal(true)}
			/>
			<Button
				label=''
                variant='danger'
				icon={Eraser}
				onClick={() => setShowDeleteAllContainerModal(true)}
			/>
		</div>
	);
}
