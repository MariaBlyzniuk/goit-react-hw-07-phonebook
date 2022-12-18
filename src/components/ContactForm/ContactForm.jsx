import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import actions from '../../redux/phonebook/actions';
// import { getContacts } from '../../redux/phonebook/selectors';
import Notiflix from 'notiflix';
import { operations, selectors } from 'redux/phonebook';
import { FormStyle, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
    const dispatch = useDispatch();
    // const contacts = useSelector(getContacts);
    const contacts = useSelector(selectors.getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
    
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (name === '' && number === '') {
        alert('Заполните все поля контакта');
        return;
    }
    contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase())
        ? Notiflix.Report.failure(`${name} is already in contacts`)
        : dispatch(operations.addContact({ name, number }));
    reset();
    };
    
    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <FormStyle action="" onSubmit={handleSubmit}>
            <Label >
                Name
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Ivan Ivanov"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Label>
            <Label >
                Number
                <Input
            
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleInputChange}
                    placeholder="+380(11)-111-11-11"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Label>
            <Button type="submit">
                Add contact
            </Button>
        </FormStyle>
    );
}



