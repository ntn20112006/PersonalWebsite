import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutMePage from './AboutMePage'
import InterestsPage from './InterestsPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AboutMePage/>} />
        <Route path='/AboutMePage' element={<AboutMePage/>} />
        <Route path='/InterestsPage' element={<InterestsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
