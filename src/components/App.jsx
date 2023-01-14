import React from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { Oval } from 'react-loader-spinner';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));
    return () => controller.abort();
  }, [dispatch]);
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts{' '}
          {isLoading && !error && (
            <Oval
              height={30}
              width={30}
              color="#80e6f3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#79ced1"
              strokeWidth={2}
              strokeWidthSecondary={2}

            />
          )}</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  
}
