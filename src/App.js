import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/Navigation';
import Home from './components/Home';
import Calc from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <section>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </section>
);

export default App;
