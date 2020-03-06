import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Blog from './Blog';
import About from './About';
import Projects from './Projects';

function Home(props) {
    return (
        <Router>
            <div>
                <h1>Welcome to Connie's World</h1>
                <p>Hello! This is my homepage.</p>
            </div>
            <nav>
                    <Link to="/blog">Blog</Link> | 
                    | <Link to="/about">About</Link> | 
                    | <Link to="/projects">Projects</Link>
                    <Route path="/blog" render={() => <Blog />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/projects" render={() => <Projects />} />
            </nav>
            
        </Router>
    )
}

export default Home;