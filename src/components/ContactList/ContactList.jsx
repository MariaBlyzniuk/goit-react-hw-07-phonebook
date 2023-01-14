import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts, getFilter, getIsLoading,getContacts  } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import { ContactListStyle, ContactText, ContactButton, ContactItem } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const [deleteID, setDeleteId] = useState(null)

    const onDeleteContact = contactId => {
        setDeleteId(contactId)
        dispatch(deleteContact(contactId));
    };

    return (
        <ContactListStyle>
    {getVisibleContacts(contacts, filter).map(({ id, name, phone  }) => (
        <ContactItem key={id}>
        <ContactText >
            {name}:  {phone }
        </ContactText>
        <ContactButton
            type="button"
                onClick={() => onDeleteContact(id)}
                disabled={isLoading && deleteID === id}
        >{isLoading && deleteID === id ? 'Deleting' : 'Delete'}</ContactButton>
        </ContactItem>
    ))}
    </ContactListStyle>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
    ),
};