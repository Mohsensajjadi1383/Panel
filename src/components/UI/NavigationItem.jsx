import React,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome,faFile,faBars } from '@fortawesome/free-solid-svg-icons'
const  NavigationItem = (props) =>{
return(
    <Fragment>


<div className=" navigation-item-container d-flex justify-content-center">
                <div className="navigation-item col-9 d-flex flex-row align-items-center " >
              <FontAwesomeIcon className={ props.classes +  " ico"} icon={props.icon} />
                <h6>{props.text}</h6>
                </div>
              </div>



    </Fragment>
)
}
export default NavigationItem