import React, { useEffect, useState, useContext } from 'react';
import BackButton from '../global/BackButton';
import CustomText from '../global/CustomText';
import Search from '../global/Search';
import { SearchContext } from '../../context/SearchContext';
import '../../../src/App.css'

const Header = ({ title = "Header Title", }) => {
    const [isSticky, setIsSticky] = useState(false);
    const { searchVisible } = useContext(SearchContext);

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

    return (
        <div 
            className={`flex flex-row items-center justify-between px-4 py-4 ${isSticky ? 'header_sticky' : ''}`}
        >
            <div className='flex gap-4 items-center'>
                <BackButton />
                <CustomText title={searchVisible ? '' : title} />
            </div>
            <Search />
        </div>
    );
};

export default Header;
