import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeFilter } from 'redux/contacts/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const value = useSelector(state => state.filter.filter);

    const dispatch = useDispatch();
return (
    <FilterLabel>
    Find contacts by name
    <FilterInput
            type="text"
            name="filter"
            placeholder="Enter name"
            value={value}
            onChange={e => dispatch(changeFilter (e.target.value))}
    />
    </FilterLabel>
);
}