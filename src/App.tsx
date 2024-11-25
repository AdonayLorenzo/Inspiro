import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SearchedPage from './pages/searcher-something-page/SearchedPage';
import { SearchProvider } from '../public/SearchContext';

function App() {

  return (
    <>
      <Router>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Searched/:searchTerm" element={<SearchedPage />} />
          </Routes>
        </SearchProvider>
      </Router>
    </>
  )
}

export default App
