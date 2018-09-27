import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
          <main>
            <Route exact path="/" component={CircleRoute} />
            <Route path="/:id" component={CircleRoute} />
          </main>
        </>
      </Router>
    );
  }
}

function Nav () {
  return <div className="side-nav">
    <nav>
      <Link to="/">index</Link>
      <Link to="/home">home</Link>
      <Link to="/space">space</Link>
      <Link to="/houston">h-town</Link>
    </nav>
  </div>
}

function CircleRoute ({ match }) {
  return <>
    <svg>
      <circle cx="50" cy="50" r="50" fill={randomColor()} />
    </svg>
    { match.params.id 
      ? <code>{ match.params.id }</code>
      : <code>index</code>
    }
  </>

}

function randomColor () {
  return `rgb(${Math.floor(Math.random() * 256)},
              ${Math.floor(Math.random() * 256)},
              ${Math.floor(Math.random() * 256)})`
}

export default App;
