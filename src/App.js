import React, { Component } from 'react';

import Menu from './components/menu';


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
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/menu" component = {()=><Menu menus={this.state.menus} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
