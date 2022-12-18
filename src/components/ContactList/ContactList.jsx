import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'redux/phonebook';
// import actions from 'redux/phonebook/actions';
// import { getVisibleContacts } from 'redux/phonebook/selectors';
import PropTypes from 'prop-types';
import { ContactListStyle, ContactText, ContactButton, ContactItem } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(selectors.getVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = id => {
    dispatch(operations.deleteContact(id));
    };

    useEffect(() => {
    dispatch(operations.fetchContacts());
    // eslint-disable-next-line
    }, [dispatch]);
    
    return (
        <ContactListStyle>
    {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
        <ContactText >
            {name}: {number}
        </ContactText>
        <ContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
        >Delete</ContactButton>
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