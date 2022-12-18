import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from 'redux/phonebook';
// import actions from 'redux/phonebook/actions';
// import { getFilter } from 'redux/phonebook/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const value = useSelector(selectors.getFilter);

    const dispatch = useDispatch();
return (
    <FilterLabel>
    Find contacts by name
    <FilterInput
            type="text"
            name="filter"
            placeholder="Enter name"
            value={value}
            onChange={e => dispatch(actions.filterChange(e.target.value))}
    />
    </FilterLabel>
);
}

