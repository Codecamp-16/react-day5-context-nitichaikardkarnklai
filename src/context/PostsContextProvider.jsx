import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

export const PostsContext = createContext();

function PostsContextProvider({ children }) {

    function createRandomPost() {
        return {
            title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
            body: faker.hacker.phrase(),
        };
    }

    const [posts, setPosts] = useState(() => Array.from({ length: 20 }, () => createRandomPost()));

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    return (
        <PostsContext.Provider value={{posts, setPosts, handleAddPost}}>{children}</PostsContext.Provider>
    )
}

export default PostsContextProvider