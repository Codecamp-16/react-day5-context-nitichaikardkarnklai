import React from 'react'
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider';

function List() {
  const { searchedPosts: posts } = useContext(SearchContext);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List