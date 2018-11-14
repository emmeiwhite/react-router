import React, { Component } from 'react';

import Menu from './components/menu';
import Error from './components/error';

import Navigation from './components/navigation';
import Blog from './components/blog';
import Services from './components/services';

import './App.css';

import {BrowserRouter as Router, Route, Switch, Link , NavLink,Redirect} from 'react-router-dom';

const Home = ()=>{
  return(
    <h1>Home Sweet Home</h1>
  )
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menus:[
        'home',
        'about',
        'services',
        'help',
        'blog'
      ]
    }
  }

  render() {
    return (
      <Router>

        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route exact path="/menu" component = {()=><Menu menus={this.state.menus} />} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/services" component={Services} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
