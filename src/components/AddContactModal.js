import React, { useState } from 'react';
import Modal from 'react-modal';

const AddContactModal = ({ isOpen, onRequestClose, addContact }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [nickname, setNickname] = useState('');
  const [jobInfo, setJobInfo] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      name,
      phoneNumber,
      email,
      photo,
      nickname,
      jobInfo,
      address,
      birthday,
      notes,
      website,
    });
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPhoto('');
    setNickname('');
    setJobInfo('');
    setAddress('');
    setBirthday('');
    setNotes('');
    setWebsite('');
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Contato"
    >
      <h2>Adicionar Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de Telefone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL da Foto"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apelido"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Informações de Trabalho"
          value={jobInfo}
          onChange={(e) => setJobInfo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data de Aniversário"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <textarea
          placeholder="Notas"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <input
          type="url"
          placeholder="Site da Web"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit">Adicionar Contato</button>
      </form>
    </Modal>
  );
};

export default AddContactModal;
