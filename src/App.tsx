import { CirclePlus } from 'lucide-react';
import { Button, CreateContainer } from './components';
import { useContainerStore } from './lib';

import { useState } from 'react';

export default function App() {
	const { containers, setContainers, addContainer } = useContainerStore();
	const [showCreateContainerModal, setShowCreateContainerModal] =
		useState(false);

	return (
		<div className='mx-auto max-w-7xl'>
			{containers.length === 0 && (
				<div className='fixed inset-0 flex items-center justify-center'>
					<Button
						label='Create Container'
						icon={CirclePlus}
						onClick={() => setShowCreateContainerModal(true)}
					/>
				</div>
			)}
			<CreateContainer
				showModal={showCreateContainerModal}
				setShowModal={setShowCreateContainerModal}
			/>
		</div>
	);
}
