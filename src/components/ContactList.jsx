import PropTypes from 'prop-types';

const Contact = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            <strong>{contact.name}: </strong>
            {contact.number}
          </p>
          <button onClick={() => onDeleteContact(contact.id)}>Usuń</button>
        </li>
      ))}
    </ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
