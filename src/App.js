import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {

  let posts = [
    {post: {
      title: "Week 1",
      content: "It has begun! Orientation was last Friday and though we had a holiday on Monday, Tuesday saw us hitting the ground sprinting. Not just running, sprinting. We were down a day and still had a full week of learning to get through. I sit here on a Saturday puzzling my way through our first big homework and still in disbelief."
    }},
    {post: {
      title: "Week 4",
      content: "All I can say is that my brain is breaking every day. Every. Day. We're learning RESTful routing, SQL and PSQL databases along with Sequelize, Node.js, Express and EJS. While the first two weeks felt like drinking from a firehose, this week feels like being hosed in the face and I'm struggling to breathe. I know, even here at the end of week 4, that I am grasping these concepts, but compiling all of these skills together is still beyond me. Here's hoping it gets better."
    }},
    {post: {
      title: "Week 7",
      content: "Well hello React! This week is already better than the last unit. Not only do I feel we're not drinking from a firehouse anymore, I akin it to swimming in a lap pool. The water isn't rough, the work is good for my brain and I can see my progress as I go. Can't wait to learn more!"
    }}
  ]

  


  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
