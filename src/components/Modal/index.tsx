import React, { useState } from "react";
import styled from "styled-components";
import ModalPopup from "react-modal";

const Modal = () => {
	const [modalOpen, setModalOpen] = useState(true);

	return (
		<ModalPopup
			isOpen={modalOpen}
			// onAfterOpen={this.afterOpenModal}
			onRequestClose={() => setModalOpen(false)}
			style={customStyles}
			contentLabel="Example Modal"
		>
			DOOR UNLOCKED
		</ModalPopup>
	);
};

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

export default Modal;
