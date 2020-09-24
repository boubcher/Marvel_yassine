import React,{ Component,useState,useEffect,useContext } from "react";
import FirebaseContext from '../firebase/context';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    BrowserRouter
  } from "react-router-dom";
import Inscription from './inscription';


 function Connexion(props){
       
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[btn,setBtn]=useState(false);
  const[error,setError]=useState('');

  const firebase=useContext(FirebaseContext);

  useEffect(()=>{
     if(password.length > 5 && email !== ''){
         setBtn(true);
     }else if(btn){
         setBtn(false);
     }
  },[password,email,btn])


  const handleSubmit = event =>{
     event.preventDefault();
     firebase.loginUser(email,password)
     .then(user=>{
        props.history.push('/Welcome');
        setEmail('');
        setPassword('');
     })
     .catch(error =>{
        setError(error);
        setEmail('');
        setPassword('');
     })
      
     
  }
  
         
          
        return(
            <div>
          {error !== '' && <span>{error.message}</span>}         
         <h1> Connexion </h1>
         <form  onSubmit={handleSubmit}>
          
          <label> Email </label><input onChange={event => { setEmail(event.target.value)}} type="email" placeholder="email"   value={email} required/><br></br>
          <label> Mot de passe </label><input onChange={event=>{ setPassword(event.target.value)}} type="password" placeholder="mot de passe" value={password}   required/><br></br>
          {btn ? <button> Connexion </button>:<button disabled> Connexion </button>}
          <Link  to={
           {
             pathname: "/Inscription"
           }
         }> Nouveau sur marvel quiz ? Inscrivez-vous maintenant </Link>
         <br></br>
         <Link  to={
           {
             pathname: "/Forgetpassword"
           }
         }> Mot de passe oublié ? Récupérer le ici </Link>
         </form>
            </div>
        )
    
}

export default Connexion;