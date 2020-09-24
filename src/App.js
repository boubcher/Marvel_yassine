import React, { Component } from 'react';
import './App.css';
import Inscription from './component/inscription';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Firebase from './firebase/firebase';
import Firebasecontext from './firebase/context';
import Connexion from './component/Connexion';
import Welcome from './component/Welcome';
import Deconnexion from './Logout/index';
import Forgetpassword from '../src/component/Forgetpassword';




class App extends Component {
  render(){
    return(
       <Router>
        <Switch>
        <Route exact path="/" component={Inscription}  /> 
        <Route path="/firebase" component={Firebase} /> 
         <Route path="/context" component={Firebasecontext} />
         <Route path="/Connexion" component={Connexion} />
         <Route path="/Welcome" component={Welcome} />
         <Route path="/Deconnexion" component={Deconnexion} />
         <Route path="/Forgetpassword" component={Forgetpassword} />

        </Switch>
       </Router>
    )
  }
}

export default App;


