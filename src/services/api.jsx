import axios from 'axios';

axios.defaults.baseURL = 'https://639dfbdb3542a26130548416.mockapi.io/contacts/contacts';


export const fetchContacts = () => axios.get('/contacts');

export const addContact = contact => axios.post('/contacts', contact);

export const deleteContact = contactId =>
    axios.delete(`/contacts/${contactId}`);