import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import About from './components/pages/About';
import PageNotFound404 from './components/pages/PageNotFound404';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path='/'>
                    <h1>Root Path!</h1>  
                </Route>
                <Route path='/about' component={ About }/>
                <Route path='/404' component= { PageNotFound404 } />
            </div>
        </Router>
    );
}

export default App;
