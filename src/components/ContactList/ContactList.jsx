import { useSelector} from 'react-redux';
import { useGetContactsQuery } from 'services/contactsApi';
import ContactListItem from './ContactListItem';
import { getFilter } from 'redux/contacts/selectors';
import { ContactListStyle} from './ContactList.styled';

export function ContactList() {
  const { data: contacts, isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const normalizedData = filter && filter.toLowerCase();
  const normalizedContacts =
    contacts &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedData)
    );

  const isContacts = normalizedContacts && normalizedContacts.length > 0;

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>An error has occurred!</p>}
      {isContacts && (
        <ContactListStyle>
          {normalizedContacts.map(({ id, name, phone: number }) => (
            <ContactListItem name={name} number={number} key={id} id={id} />
          ))}
        </ContactListStyle>
      )}
    </>
  );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string,
//         number: PropTypes.string,
//     }),
//     ),
// };