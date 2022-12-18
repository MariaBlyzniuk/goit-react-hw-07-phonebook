import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/actions';
import { getFilter } from 'redux/contacts/selectors';
import { FilterLabel, FilterInput} from './Filter.styled';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterContact(e.currentTarget.value));

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
          placeholder="Enter search name"
        />
      </FilterLabel>
    </div>
  );
};


