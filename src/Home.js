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
    let posts = [
        {
          title: "Week 1",
          content: "It has begun! Orientation was last Friday and though we had a holiday on Monday, Tuesday saw us hitting the ground sprinting. Not just running, sprinting. We were down a day and still had a full week of learning to get through. I sit here on a Saturday puzzling my way through our first big homework and still in disbelief."
        },
        {
          title: "Week 4",
          content: "All I can say is that my brain is breaking every day. Every. Day. We're learning RESTful routing, SQL and PSQL databases along with Sequelize, Node.js, Express and EJS. While the first two weeks felt like drinking from a firehose, this week feels like being hosed in the face and I'm struggling to breathe. I know, even here at the end of week 4, that I am grasping these concepts, but compiling all of these skills together is still beyond me. Here's hoping it gets better."
        },
        {
          title: "Week 7",
          content: "Well hello React! This week is already better than the last unit. Not only do I feel we're not drinking from a firehouse anymore, I akin it to swimming in a lap pool. The water isn't rough, the work is good for my brain and I can see my progress as I go. Can't wait to learn more!"
        }
      ]
    
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
                    <Route path="/blog" render={() => <Blog posts={posts} />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/projects" render={() => <Projects />} />
            </nav>
            
        </Router>
    )
}

export default Home;