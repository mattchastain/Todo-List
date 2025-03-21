import { CirclePlus } from 'lucide-react';
import { Button, AddContainerModal } from './components';
import { useContainerStore } from './lib';

import { useState } from 'react';

export default function App() {
	const { containers, setContainers, addContainer } = useContainerStore();
	const [showAddContainerModal, setShowAddContainerModal] =
		useState(false);

	return (
		<div className='mx-auto max-w-7xl'>
			{containers.length === 0 && (
				<div className='fixed inset-0 flex items-center justify-center'>
					<Button
						label='Add Your First Container'
						icon={CirclePlus}
						onClick={() => setShowAddContainerModal(true)}
					/>
				</div>
			)}
			<AddContainerModal
				showModal={showAddContainerModal}
				setShowModal={setShowAddContainerModal}
				addContainer={addContainer}
			/>
		</div>
	);
}
