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
            <Route exact path="/" component={BoltRoute} />
            <Route path="/:id" component={BoltRoute} />
          </main>
        </>
      </Router>
    );
  }
}

function Nav () {
  return <div className="side-nav">
    <svg>
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        fill="none" 
        stroke="rgb(0,0,0)"
        stroke-width="2"
      />
    </svg>
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

function BoltRoute ({ match }) {  
  return <>
    <svg>
      <polygon 
        points="0,100 50,25 50,75 100,0" 
        fill={randomColor()}
      />
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
