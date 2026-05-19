import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Candidate from './Candidate/Candidate_basic'
import CandidateProfessional from './Candidate/Candidate_professional'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div className="app-brand">WHS Candidate Pool</div>
        <nav className="app-nav">
          <Link to="/candidate/basic">Basic Info</Link>
          <Link to="/candidate/professional">Professional Info</Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <h1>Welcome to WHS Candidate Pool System</h1>
              <p>Select a candidate form above to get started</p>
            </div>
          }
        />
        <Route path="/candidate/basic" element={<Candidate />} />
        <Route path="/candidate/professional" element={<CandidateProfessional />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
