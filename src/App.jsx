import './App.css'
import React, { lazy, Suspense } from 'react'
import Loader from './components/global/Loader';
const CategoryPage = lazy(() => import('./pages/CategoryPage'));

function App() {
  return (
    <Suspense fallback={
      <Loader />
    }>
      <CategoryPage />
    </Suspense>
  )
}

export default App
