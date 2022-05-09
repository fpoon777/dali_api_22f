import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Nav from './nav';
import Footer from './footer';
import Home from './home';
import MapPage from './map-page';

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
