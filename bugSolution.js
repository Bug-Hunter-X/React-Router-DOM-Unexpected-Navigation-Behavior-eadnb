```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    console.log('Home component rendered with location:', location.pathname);
  }, [location]);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  const location = useLocation();
  useEffect(() => {
    console.log('About component rendered with location:', location.pathname);
  }, [location]);
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
```