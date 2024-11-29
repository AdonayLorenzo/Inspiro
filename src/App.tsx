import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SearchedPage from './pages/searcher-something-page/SearchedPage';
import Login from './pages/login-page/Login';
import Register from './pages/register-page/Register';
import { SearchProvider } from '../public/SearchContext';

function App() {

  return (
    <>
      <Router>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Searched/:searchTerm" element={<SearchedPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </SearchProvider>
      </Router>
    </>
  )
}

export default App
