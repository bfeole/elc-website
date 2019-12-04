import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';
import NavBar from './Components/NavBar';

// Styling
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <NavBar />
        <Route exat path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;
