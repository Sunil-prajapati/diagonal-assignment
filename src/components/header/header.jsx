import React, { useEffect, useState } from 'react';
import BackButton from '../global/BackButton';
import CustomText from '../global/CustomText';
import Search from '../global/Search';

const Header = ({ title = "Header Title", handleSearch }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchClicked = (value) => {
        setSearchVisible(!value)
    }

    return (
        <div className={`flex flex-row items-center justify-between px-4 py-4 ${isSticky ? 'header-sticky' : ''}`}>
            <div className='flex gap-4 items-center'>
                <BackButton />
                <CustomText title={searchVisible ? '' : title} />
            </div>
            <Search handleSearch={handleSearch} isSearchClicked={handleSearchClicked}/>
        </div>
    );
};

export default Header;
