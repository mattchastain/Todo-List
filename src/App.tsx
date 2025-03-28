import { Plus } from 'lucide-react';
import {
	AddContainerModal,
	AddItemModal,
	Button,
	Container,
	DeleteAllContainersModal,
	EditContainerModal,
	Toolbar,
} from './components';
import { onDeleteContainer, onEditContainer, useContainerStore } from './lib';

import { useMemo, useState } from 'react';

export default function App() {
	const { containers, setContainers, addContainer } = useContainerStore();
	const [currentContainerId, setCurrentContainerId] = useState<Date>();
	const [showAddContainerModal, setShowAddContainerModal] = useState(false);

	const [showEditContainerModal, setShowEditContainerModal] = useState(false);

	const [editedContainerTitle, setEditedContainerTitle] = useState('');
	const [showDeleteAllContainerModal, setShowDeleteAllContainerModal] =
		useState(false);

	const [showAddItemModal, setShowAddItemModal] = useState(false);
	// const [editedItemTitle, setEditedItemTitle] = useState('');

	return (
		<div className='mx-auto max-w-7xl flex flex-col gap-8'>
			{containers.length === 0 ? (
				<div className='fixed inset-0 flex items-center justify-center'>
					<Button
						label='Add Container'
						icon={Plus}
						onClick={() => setShowAddContainerModal(true)}
					/>
				</div>
			) : (
				<Toolbar
					setShowAddContainerModal={setShowAddContainerModal}
					setShowDeleteAllContainerModal={
						setShowDeleteAllContainerModal
					}
				/>
			)}
			<AddContainerModal
				showModal={showAddContainerModal}
				setShowModal={setShowAddContainerModal}
				addContainer={addContainer}
			/>
			<EditContainerModal
				containerId={currentContainerId}
				showModal={showEditContainerModal}
				setShowModal={setShowEditContainerModal}
				setEditedContainerTitle={setEditedContainerTitle}
				onEditContainer={() =>
					onEditContainer(
						currentContainerId,
						containers,
						setContainers,
						editedContainerTitle,
						setShowEditContainerModal
					)
				}
			/>
			<DeleteAllContainersModal
				showModal={showDeleteAllContainerModal}
				setShowModal={setShowDeleteAllContainerModal}
				setContainers={setContainers}
			/>
			<AddItemModal
				showModal={showAddItemModal}
				setShowModal={setShowAddItemModal}
				containers={containers}
				setContainers={setContainers}
				currentContainerId={currentContainerId}
			/>
			{useMemo(
				() => (
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{containers.map((container) => (
							<Container
								title={container.title}
								items={container.items}
								key={Math.random() * 1000}
								onAddItem={() => {
									setShowAddItemModal(true);
									setCurrentContainerId(container.id);
								}}
								onDeleteContainer={() =>
									onDeleteContainer(
										container.id,
										containers,
										setContainers
									)
								}
								setCurrentContainerId={() => setCurrentContainerId(container.id)}
								setShowEditContainerModal={() => setShowEditContainerModal(true)}
							/>
						))}
					</div>
				),
				[containers]
			)}
		</div>
	);
}
