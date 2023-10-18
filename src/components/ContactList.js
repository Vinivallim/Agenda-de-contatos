import React from 'react';
import './ContactList.css';

const circleImageStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'inline-block',
};

function ContactList({ contacts, selectedContact, setSelectedContact, setEditingContact, setIsEditModalOpen }) {
  return (
    <div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => setSelectedContact(contact)}>
            <div style={circleImageStyle}>
              <img src={contact.photo} alt={contact.name} width="50" height="50" />
            </div>
            <p style={{ display: 'inline-block', marginLeft: '10px' }}>{contact.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
