import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
import avatar from '../../assets/images/avatar.jpg';

import {
  Input,
  StyleSearch,
  SearchHead,
  SearchHeadTitle,
  SearchForm,
  SearchResult,
  SearchResultTitle,
} from './styledComponents';

import Person from '../person/Person';

const initialState = {
  hits: [],
  query: '',
  loading: true,
  errorMessage: '',
  url: 'https://hn.algolia.com/api/v1/search?query=""',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return { ...state, hits: action.payload };
    }

    case 'SET_LOADING': {
      return { ...state, loading: action.payload };
    }

    case 'SET_QUERY': {
      return { ...state, query: action.payload };
    }

    case 'SET_ERROR': {
      return { ...state, errorMessage: action.payload };
    }

    case 'SET_URL': {
      return { ...state, url: action.payload };
    }

    default:
      break;
  }
};

const Search = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: 'SET_DATA',
        payload: response.data?.hits || [],
      });
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
      dispatch({
        type: 'SET_ERROR',
        payload: ` Error: ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <StyleSearch className={className}>
      <SearchHead>
        <SearchHeadTitle>Search</SearchHeadTitle>
        <SearchForm>
          <Input
            type='text'
            className='form-control'
            placeholder='Search'
            defaultValue={state.query}
            onChange={(e) => {
              dispatch({
                type: 'SET_QUERY',
                payload: e.target.value,
              });
              dispatch({
                type: 'SET_URL',
                payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
              });
            }}
          />
          <i className='icon-search'></i>
        </SearchForm>
        {!state.loading && state.errorMessage && (
          <p className='text-err'>{state.errorMessage}</p>
        )}
      </SearchHead>
      <SearchResult>
        {!state.loading && <SearchResultTitle>Recent</SearchResultTitle>}
        {!state.loading &&
          !state.errorMessage &&
          state.hits.length > 0 &&
          state.hits.map(
            (item) =>
              item.title && (
                <Person
                  key={item.title}
                  avatar={avatar}
                  name={item.title}
                  info={item.title}
                  follow='4.6M followers'
                />
              )
          )}
      </SearchResult>
    </StyleSearch>
  );
};

export default Search;
