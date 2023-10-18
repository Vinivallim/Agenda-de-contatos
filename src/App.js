import React, { useState } from 'react';
import ReactSelect from 'react-select';
import ContactList from './components/ContactList';
import AddContactModal from './components/AddContactModal';
import EditContactModal from './components/EditContactModal';
import './App.css';



function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const filteredOptions = contacts.map((contact, index) => ({
    value: index,
    label: contact.name,
  }));

  const addContact = (contact) => { 
    setContacts([...contacts, contact]);
    setIsModalOpen(false);
  };

  const editContact = (editedContact) => {
    const updatedContacts = contacts.map((c) => (c.id === editedContact.id ? editedContact : c));
    setContacts(updatedContacts);
    setSelectedContact(editedContact); // Atualiza o contato selecionado
    setIsEditModalOpen(false);
  };

  const deleteContact = (contactToDelete) => {
    const updatedContacts = contacts.filter((contact) => contact !== contactToDelete);
    setContacts(updatedContacts);
    setSelectedContact(null); // Fecha as informações após a exclusão
  };

  const handleSelectContact = (selectedIndex) => {
    const selectedContact = contacts[selectedIndex];
    setSelectedContact(selectedContact);
  };  

  return (
    <div className="App centered-container">
      <h2>Lista de Contatos</h2>
      <ReactSelect
        options={filteredOptions}
        onInputChange={(inputText) => setFilterText(inputText)}
        onChange={handleSelectContact}
        styles={{
          container: (base) => ({
            ...base,
            width: '300px', // Defina a largura desejada
          }),
        }}
      />
      <button onClick={() => setIsModalOpen(true)}>Adicionar Contato</button>
      <div className="contact-container">
        <ContactList
          contacts={contacts}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          setEditingContact={setEditingContact}
          setIsEditModalOpen={setIsEditModalOpen} // Certifique-se de que esta propriedade esteja sendo passada
          deleteContact={deleteContact}
        />
        {selectedContact && (
          <div
            className="contact-details"
            onClick={() => setSelectedContact(null)}
          >
            <h3>Detalhes do Contato</h3>
            <p>Nome: {selectedContact.name}</p>
            <p>Número de Telefone: {selectedContact.phoneNumber}</p>
            <p>Email: {selectedContact.email}</p>
            <p>Apelido: {selectedContact.nickname}</p>
            <p>Informações de Trabalho: {selectedContact.jobInfo}</p>
            <p>Endereço: {selectedContact.address}</p>
            <p>Data de Aniversário: {selectedContact.birthday}</p>
            <p>Notas: {selectedContact.notes}</p>
            <p>Site da Web: {selectedContact.website}</p>
            <button onClick={() => deleteContact(selectedContact)}>Deletar</button>
            <button
              onClick={() => {
                setEditingContact(selectedContact);
                setIsEditModalOpen(true);
              }}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    <AddContactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      addContact={addContact}
    />
    <EditContactModal
      isOpen={isEditModalOpen}
      onRequestClose={() => setIsEditModalOpen(false)}
      editingContact={editingContact}
      editContact={editContact}
    />
  </div>
);
}

export default App;
