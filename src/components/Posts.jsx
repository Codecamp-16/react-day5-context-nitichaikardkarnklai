import React from 'react'
import List from './List';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContextProvider';

function Posts() {
    const { searchedPosts: posts } = useContext(SearchContext);
    return (
        <section>
            <List />
        </section>
    );
}

export default Posts