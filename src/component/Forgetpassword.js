import React , {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import FirebaseContext from '../firebase/context';
const ForgetPassword = props => {
    const [email,setEmail]=useState("");
    const firebase=useContext(FirebaseContext);
    const [success,setSuccess]=useState(null);
    const [error,setError]=useState(null);

    const handleSubmit = event => {
      event.preventDefault();
      firebase.PasswordReset(email)
      .then(()=>{
        setError(null);
        setSuccess('Consultez votre adresse email pour changer le mot de passe');
        setEmail("");
        setTimeout(()=>{
          props.history.push('./Connexion')
        },5000);
      })
      .catch(error =>{
        setError(error);
        setEmail("");
      })
    }
    
    const disabled=email=== "";
    return(
        <div> 
        {success && <span style={{ border:"1px solid green", background:"green",color:"white"}}>{success}</span>}
    {error && <span>{error.message}</span> }     
       <h1> Mot de passe oublié ? </h1>
       <form  onSubmit={handleSubmit}>
        
        <label> Email </label><input onChange={event => { setEmail(event.target.value)}} type="email" placeholder="email"   value={email} required/><br></br>
        <button disabled={disabled}> Recuperer   </button>
        <Link  to={
         {
           pathname: "/Inscription"
         }
       }> Déjà inscrit ? Connectez-vous  </Link>
       </form>
          </div>
    )
}

export default ForgetPassword;