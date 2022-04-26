import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calc from './components/Calculator';
import NavBar from './components/Navigation';

const App = () => (
  <section>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calc />} />
      </Routes>
    </Router>
  </section>
);

export default App;
