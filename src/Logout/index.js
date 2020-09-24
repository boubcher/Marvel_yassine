
import React, {useState, useEffect,useContext} from 'react'
import FirebaseContext from '../firebase/context';


function Deconnexion() {
    const [Checked,setChecked]= useState(false);
    const firebase=useContext(FirebaseContext);
    console.log(Checked);
    useEffect(()=>{
       if(Checked){
       console.log("Deconnexion");
       firebase.signoutUser();
       }
    },[Checked,firebase]);
   
    const handlechange = event =>{
        setChecked(event.target.checked);
    }

    return(
        <div className="logoutContainer">
        <label className="switch">    
        <input onChange={handlechange} type="checkbox" checked={Checked} />
        <span className="slider round"></span>
        </label>
        </div>
    )
}

export default Deconnexion;