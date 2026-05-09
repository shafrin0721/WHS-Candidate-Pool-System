import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileView from './pages/ProfileView/ProfileView';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Optional: Navigation Bar */}
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ProfileView />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;