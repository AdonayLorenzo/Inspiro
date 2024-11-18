import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SearchedPage from './pages/searcher-something-page/SearchedPage';

function App() {

  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Searched/:searchTerm" element={<SearchedPage />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
