import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Cabinet from './components/Cabinet';
import Login from './components/Login';
import Regest from './components/Regest';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <header className="App-header">
        </header> */}
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/cabinet" element={<Cabinet />} />
          <Route index path="/" element={<Login />} />   
          <Route path="/regest" element={<Regest />} />         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
