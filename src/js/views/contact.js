import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faTrashCan, // Icono de eliminación moderno
  faPen, // Icono de edición moderno
  faUser // Icono de usuario para el perfil
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import ConfirmationModal from "./confirmationModal";

const Contacts = ({ fullName, address, phone, email, id, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id); // Ejecutar la función de eliminación pasada como prop
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div
      className="container border d-flex justify-content-center p-1 mb-3" // Añadido mb-3 para margen inferior
      style={{
        backgroundImage: 'url("https://i.pinimg.com/originals/f9/be/6c/f9be6c46b2e059924b9745cee04e21ca.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px', // Agrega bordes redondeados si lo deseas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Opcional: agrega sombra para mejorar la apariencia
        color: 'white' // Establecer el color del texto a blanco para mayor visibilidad
      }}
    >
      <div className="col-3 d-flex align-items-center justify-content-center">
        <FontAwesomeIcon
          icon={faUser}
          size="3x" // Tamaño del icono
          style={{ color: 'white' }}
        />
      </div>
      <div className="col-6 d-flex flex-column g-2 text-start">
        <div className="fs-4 p-1">{fullName}</div>
        <div className="text-light"> {/* Cambiado a text-light para asegurar contraste */}
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          {phone}
        </div>
        <div className="text-light"> {/* Cambiado a text-light para asegurar contraste */}
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          {email}
        </div>
        <div className="text-light"> {/* Cambiado a text-light para asegurar contraste */}
          <FontAwesomeIcon icon={faLocationDot} className="me-2" />
          {address}
        </div>
      </div>
      <div className="col-3 d-flex align-items-start justify-content-end p-2">
        {/* Contenedor para los iconos de edición y eliminación alineados horizontalmente */}
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

      {/* Mostrar el modal de confirmación */}
      <ConfirmationModal
        isOpen={showModal}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Contacts;
