import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons"; 

const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal d-flex align-items-center justify-content-center" style={{ display: "block", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">¿Deseas eliminar el contacto?</h5>
            <button type="button" className="btn-close" onClick={onCancel}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="modal-body">
            <p>Si eliminas el contacto, no podrás volver a recuperarlo. ¿Continuar?</p>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              <FontAwesomeIcon icon={faCheck} /> Eliminar
            </button>
            <button 
              type="button"
              className="btn bg-dark text-light"
              onClick={onCancel}
            >
              <FontAwesomeIcon icon={faXmark}/> Cancelar 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
