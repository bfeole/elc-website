import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Services from './Components/Services';

// Styling
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
      </Router>
    </div>
  );
}

export default App;
