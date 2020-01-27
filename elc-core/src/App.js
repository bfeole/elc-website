import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Services from './Components/Services';

// Styling
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
