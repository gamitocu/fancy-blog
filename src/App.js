import React, { Component } from'react';
import { 
  BrowserRouter as Router,
  Route,
} from'react-router-dom';
import Home from'./pages/home';
import About from'./pages/about';
import Posts from'./pages/posts';
import Post from'./pages/post';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="container">
          <Route exact path="/" class="hljs-string" component={Home} />
          <Route path="/about" class="hljs-string" component={About} />
          <Route path="/posts" class="hljs-string" component={Posts} />
          <Route path="/post/:postId" class="hljs-string" component={Post} />
        </div>

      </Router>
    );
  }
}

export default App;
