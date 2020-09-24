import React,{Fragment} from 'react';
import index from '../ProgressBar/index.css';

const ProgressBar = () => {
    return(
        <Fragment>
       <div className="percentage">
           <div className="progress">Question : 1/10 </div><div className="progress"> Progession : 10%  </div>
           
       </div>
       <div className="progress">
        <div className="progressBarChange" style={{width:'10%'}}>

        </div>
       </div>
       </Fragment>
    )
}

export default ProgressBar;