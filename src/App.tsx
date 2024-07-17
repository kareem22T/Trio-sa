import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import Home from './pages/home/home';
import "./css/fonts.css"
import "./css/main.css"
import "./css/reponsive.css"
import Portfolio from './pages/portfolio/portfolio';
import Services from './pages/services/services';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolio />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Services />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
