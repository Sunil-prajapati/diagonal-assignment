import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        if (searchVisible) {
            setSearchQuery('');
        }
    };

    return (
        <SearchContext.Provider value={{ searchQuery, handleSearch, searchVisible, setSearchVisible, setSearchQuery, toggleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
