import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SearchContextProvider from './context/SearchContextProvider.jsx';
import PostsContextProvider from './context/PostsContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <PostsContextProvider>
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
    </PostsContextProvider>
);