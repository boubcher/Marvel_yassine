import React,{ Component,useState,Fragment,useContext, useEffect } from "react";
import Logout from '../Logout/index'; 
import Quiz from '../Quiz/index';
import FirebaseContext from '../firebase/context';



 const Welcome =props=>  {
    
        const firebase=useContext(FirebaseContext);
        const [userSession,setuserSession]=useState(null);
        const [userData,setUserData]=useState({});
        useEffect(()=>{
          let listener=firebase.auth.onAuthStateChanged(user =>{
               user ? setuserSession(user):props.history.push('/');
           })
           if(!!userSession){
            firebase.user(userSession.uid).get()
            .then(doc=>{
                if(doc && doc.exists){
                   const mydata=doc.data();
                   setUserData(mydata);
                }
            })
            .catch(error=>{
              console.log(error);
            })

           }
           

           return () =>{
               listener()
           }
        },[userSession])
        return( userSession===null ? (<Fragment><div className="loader"></div><p>Loading ...</p></Fragment>):
        (<div>
            <h1> Welcome user </h1>
            <Logout />
            <Quiz userData={userData} />
        </div>)
        )  

}
export default Welcome;