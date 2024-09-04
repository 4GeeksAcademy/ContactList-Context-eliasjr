import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faTrashCan,
  faPen,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConfirmationModal from "./confirmationModal";

const Contacts = ({ fullName, address, phone, email, id, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div
      className="container border d-flex justify-content-center p-1 mb-3"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/f9/be/6c/f9be6c46b2e059924b9745cee04e21ca.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: 'white'
      }}
    >
      <div className="col-3 d-flex align-items-center justify-content-center">
        <FontAwesomeIcon
          icon={faUser}
          size="3x"
          style={{ color: 'white' }}
        />
      </div>
      <div className="col-6 d-flex flex-column g-2 text-start">
        <div className="fs-4 p-1">{fullName}</div>
        <div className="text-light">
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          {phone}
        </div>
        <div className="text-light">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          {email}
        </div>
        <div className="text-light">
          <FontAwesomeIcon icon={faLocationDot} className="me-2" />
          {address}
        </div>
      </div>
      <div className="col-3 d-flex align-items-start justify-content-end p-2">
        <div className="d-flex align-items-center">
          <Link to={`/edit/${id}`} className="text-decoration-none me-2">
            <FontAwesomeIcon
              icon={faPen}
              style={{ cursor: "pointer", color: "lightblue" }}
            />
          </Link>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={handleDeleteClick}
            style={{ cursor: "pointer", color: "salmon" }}
          />
        </div>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Contacts;
