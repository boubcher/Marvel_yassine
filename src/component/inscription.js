import React,{useState,useContext} from 'react';
import FirebaseContext from '../firebase/context';
import {Link} from 'react-router-dom';

const Inscription  =() => {
    const firebase=useContext(FirebaseContext);
 
   const data ={
       pseudo : '',
       email : '',
       password: '',
       confirmerpassword : ''
   }
   const[loginData,setloginData]=useState(data);
   const [error,setError]=useState(''); 
   const handleInput = event => {
       setloginData({
        ...loginData,[event.target.id]:event.target.value
       })
   }

   const {pseudo,email,password,confirmerpassword}=loginData;

   const btn= pseudo ===' ' || email===' ' ||password===' '||confirmerpassword===' '|| password !== confirmerpassword ? <button disabled> Inscription </button> : <button > Inscription  </button> 

   const handleSubmit = event => {
       event.preventDefault();
       const {email,password}=loginData;
       firebase.signupUser(email,password)
       .then(authUser =>{
           return firebase.user(authUser.user.uid).set({
               pseudo,
               email
           })
       })
       .then(user =>{
        setloginData({...data});
       })
       .catch(error =>{
         setError(error);
         setloginData({...data});
       })
   } 
     const errorMsge=error !=='' && <span>{error.message}</span>

    return(
        <div>
         {errorMsge}   
        <h1> Inscription   </h1>
        <form onSubmit={handleSubmit}>
        <label> Pseudo   </label><input onChange={handleInput}  type="text" placeholder="entrez votre pseudo" id="pseudo" value={pseudo}  required/><br></br>
        <label> Email    </label><input onChange={handleInput} type="email" placeholder="entre l'email" id="email" value={email} required/><br></br>
        <label htmlFor="password"> mot de passe </label><input onChange={handleInput}  type="password" placeholder="entrer votre password" id="password" value={password} required/><br></br>
        <label htmlFor="password"> Confirmer le mot de passe </label><input onChange={handleInput} type="password" placeholder="confirmer votre password" id="confirmerpassword" value={confirmerpassword} required/><br></br>
         {btn}
        </form>
        <Link to={{
            pathname : "/Connexion"
        }}
        >
         Déjà inscrit ? Connectez-vous   
        
        </Link>

        </div>
    )

}

export default Inscription;