import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalPopup from "react-modal";
import Icon from "@mdi/react";
import { mdiMusicNoteOutline } from "@mdi/js";

const DoorbellModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  let timer1 = setTimeout(() => setShowLoading(false), 4000);
  useEffect(() => {
    return () => {
      clearTimeout(timer1);
    };
  }, [showLoading]);

  return (
    showLoading && (
      <ModalPopup
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <Icon
          path={mdiMusicNoteOutline}
          size={3}
          color="#003c8f"
          style={{ fontSize: "2rem" }}
        />
        <p />
        Ding!
        <p style={{ fontSize: "1rem" }}>
          The doorbell has rung <br />
          someone will be with your shortly.
        </p>
      </ModalPopup>
    )
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontFamily: "Varela Round, sans-serif",
    fontSize: "2rem",
    border: "none"
  }
};

export default DoorbellModal;
