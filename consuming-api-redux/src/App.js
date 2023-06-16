import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
