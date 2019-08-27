import React from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import Fifa20Background from "../../../assets/img/Fifa20Background.jpg";

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
      width: window.innerWidth <= 768 ? "80%" : "40%",
      overflow: "visible",
      background: "gray",
      border: "none",
      backgroundImage: `url(${Fifa20Background})`,
      backgroundSize: "cover",
      backgroundPosition: "50% 0%",
      backgroundRepeat: "no-repeat",
      padding: "30px"
    },
    overlay: { zIndex: "10000000", backgroundColor: "rgba(0, 0, 0, 0.75)" }
  };
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        src={require("../../../assets/img/IconClose.svg")}
        className={styles.close}
        onClick={() => setModalIsOpen(false)}
      />
      <div className={styles.modal}>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactModal>
  );
};
