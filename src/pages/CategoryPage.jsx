import React, { useContext } from 'react';
import Header from '../components/header/header';
import { API_URL } from '../constant/enum';
import useFetch from '../hooks/useFetch';
import ListItem from '../components/ui/ListItem';
import Error from '../components/global/Error';
import Loader from '../components/global/Loader';
import { SearchContext } from '../context/SearchContext';

const CategoryPage = () => {
    const { searchQuery } = useContext(SearchContext);
    const { data, loading, error } = useFetch(`${API_URL.BASE_URL}data/page1.json`);

    const pageTitle = data?.page?.title;
    const contentItems = data?.page?.['content-items']?.content || [];

    const filteredItems = contentItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header title={pageTitle} />
            {loading && <Loader />}
            {error && <Error message={error} />}
            {!loading && !error && filteredItems.length > 0 && (
                <div className='grid md:grid-cols-8 grid-cols-3 gap-4 my-2 px-4'>
                    {filteredItems.map((eachMovie, key) => (
                        <ListItem data={eachMovie} key={key || eachMovie.name} />
                    ))}
                </div>
            )}
            {!loading && !error && filteredItems.length === 0 && <div>No items found.</div>}
        </div>
    );
};

export default CategoryPage;

