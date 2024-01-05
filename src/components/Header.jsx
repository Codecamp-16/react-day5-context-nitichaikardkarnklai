import React from 'react'
import SearchPosts from './SearchPosts';
import Results from './Results';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider';

function Header() {

  const { handleClearPosts } = useContext(SearchContext);

  return (
    <header>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header