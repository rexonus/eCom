import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const Hats = () => (<div>Hello Hats!</div>);

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/hats" component={Hats}/>
        </Switch>
      </div>);
  }

}

export default App;
