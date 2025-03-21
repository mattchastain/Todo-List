import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	children: React.ReactNode;
}

export function Modal({ showModal, setShowModal, children }: ModalProps) {
	return <div>modal</div>;
}
