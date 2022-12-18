import React, { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery,
} from 'services/contactsApi';
import { FormStyle, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');

    const [addContact] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
    
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (
        contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
        )
    ) {
        return alert(`Contact ${name} is already exist`);
    }
    addContact({ name, phone });
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
                    name="phone"
                    value={phone}
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



