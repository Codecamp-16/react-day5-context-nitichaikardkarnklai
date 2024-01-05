import React from 'react'
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider';

function Results() {
  const { searchedPosts: posts } = useContext(SearchContext);
  return <p>{posts.length} atomic posts found</p>;
}


export default Results