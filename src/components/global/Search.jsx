import React, { memo, useContext } from 'react';
import SearchIcon from '../../assets/images/search.png';
import SearchCross from '../../assets/images/search-cross.png'
import { SearchContext } from '../../context/SearchContext';

const Search = () => {
    const { searchQuery, setSearchQuery, searchVisible, toggleSearch } = useContext(SearchContext);
    const onChange = (value) => {
        setSearchQuery(value);
    };
    return (
        <div className={`flex flex-row items-center transition-all ease-in-out ${searchVisible && 'w-full'}`}>
            {searchVisible ? (
                <>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => onChange(e.target.value)}
                        className={`p-2 text-xl ${searchVisible ? 'w-full' : 'w-8'} h-9 mr-2  relative`}
                    />
                    <img src={SearchCross} loading='eager' alt="search icon" width='24' height='24' className='absolute right-8 cursor-pointer' onClick={toggleSearch} />
                </>
            ) : (
                <img src={SearchIcon} loading='eager' alt="search icon" width='24' height='24' onClick={toggleSearch} />
            )}
        </div>
    );
};

export default memo(Search);

