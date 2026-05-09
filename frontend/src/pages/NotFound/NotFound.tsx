import { useNavigate } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page not found</h1>
        <p className="notfound-text">The page you’re looking for doesn’t exist or may have been moved.</p>
        <button className="notfound-btn" onClick={() => navigate('/')} type="button">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

