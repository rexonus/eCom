import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';


const Hats = () => (<div>Hello Hats!</div>);

// function App(){
//   return (
//     <div>
//       <Switch>
//         <Router exact path="/" component={HomePage}/>
//         <Router path="/hats" component={Hats}/>
//       </Switch>
//     </div>);
// }

class App extends React.Component{
  // constructor(){
  //   super();
  // }
  
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
