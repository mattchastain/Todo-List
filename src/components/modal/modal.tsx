import { FocusTrap } from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

interface ModalProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	children: React.ReactNode;
}

export function Modal({
	showModal = true,
	setShowModal,
	children,
}: ModalProps) {
    
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') setShowModal(false);
		},
		[setShowModal]
	);

	return (
		<AnimatePresence>
			{showModal && (
				<>
					<FocusTrap focusTrapOptions={{ initialFocus: false }}>
						<motion.div
							initial={{ scale: 0.7, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.7, opacity: 0 }}
							className='fixed inset-0 flex items-center justify-center z-50 min-h-screen'
						>
							<div>{children}</div>
						</motion.div>
					</FocusTrap>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 flex items-center justify-center z-40 min-h-screen bg-neutral-950/50 backdrop-blur'
						onClick={() => setShowModal(false)}
					/>
				</>
			)}
		</AnimatePresence>
	);
}
