import { useDeleteContactMutation } from 'services/contactsApi';
import PropTypes from 'prop-types';
import { ContactText, ContactButton, ContactItem } from './ContactList.styled';
export default function ContactListItem({ id, name, number }) {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem >
      
        <ContactText>{name}:</ContactText>
        <span>
          <a href={`tel:${number}`}>
            {number}
          </a>
        </span>
      
      <ContactButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </ContactButton>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};