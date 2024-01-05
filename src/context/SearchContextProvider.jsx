import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { PostsContext } from './PostsContextProvider';
import { useContext } from 'react';

export const SearchContext = createContext();

function SearchContextProvider({ children }) {
    const { posts, setPosts} = useContext(PostsContext);
    const [searchQuery, setSearchQuery] = useState('');

    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleClearPosts() {
        setPosts([]);
    }

    return (
        <SearchContext.Provider value={{
            searchQuery, setSearchQuery, searchedPosts, handleClearPosts
        }}>{children}</SearchContext.Provider>
    )
}

export default SearchContextProvider