import React, { lazy, Suspense } from 'react';
import Loader from './components/global/Loader';
import { SearchProvider } from './context/SearchContext';

const CategoryPage = lazy(() => import('./pages/CategoryPage'));

function App() {
  return (
    <SearchProvider>
      <Suspense fallback={<Loader />}>
        <CategoryPage />
      </Suspense>
    </SearchProvider>
  );
}

export default App;
