import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";

export type ModalProps = {
  children: any;
  setModalIsOpen: any;
  modalIsOpen: boolean;
};

export const Modal = ({
  children,
  setModalIsOpen,
  modalIsOpen
}: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      overflow: "visible"
    },
    overlay: { zIndex: "10000000", backgroundColor: "rgba(0, 0, 0, 0.25)" }
  };
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactModal>
  );
};
