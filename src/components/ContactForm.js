import React, { useState } from 'react';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phoneNumber, email, photo });
    setName('');
    setPhoneNumber('');
    setEmail('');
    setPhoto('');
  };

  return (
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
      <button type="submit">Adicionar Contato</button>
    </form>
  );
}

export default ContactForm;
