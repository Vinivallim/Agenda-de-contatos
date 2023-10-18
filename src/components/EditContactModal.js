import React, { useState } from 'react';

function EditContactModal({ isOpen, onRequestClose, editingContact, editContact }) {
  const [editedContact, setEditedContact] = useState(editingContact);

  const handleEdit = () => {
    editContact(editedContact);
    onRequestClose();
  };

  if (!isOpen || !editedContact) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Editar Contato</h3>
        <form>
          <input
            type="text"
            placeholder="Nome"
            value={editedContact.name}
            onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Número de Telefone"
            value={editedContact.phoneNumber}
            onChange={(e) => setEditedContact({ ...editedContact, phoneNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={editedContact.email}
            onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Apelido"
            value={editedContact.nickname}
            onChange={(e) => setEditedContact({ ...editedContact, nickname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Informações de Trabalho"
            value={editedContact.jobInfo}
            onChange={(e) => setEditedContact({ ...editedContact, jobInfo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Endereço"
            value={editedContact.address}
            onChange={(e) => setEditedContact({ ...editedContact, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Data de Aniversário"
            value={editedContact.birthday}
            onChange={(e) => setEditedContact({ ...editedContact, birthday: e.target.value })}
          />
          <input
            type="text"
            placeholder="Notas"
            value={editedContact.notes}
            onChange={(e) => setEditedContact({ ...editedContact, notes: e.target.value })}
          />
          <input
            type="text"
            placeholder="Site da Web"
            value={editedContact.website}
            onChange={(e) => setEditedContact({ ...editedContact, website: e.target.value })}
          />
        </form>
        <button onClick={handleEdit}>Salvar</button>
        <button onClick={onRequestClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default EditContactModal;
