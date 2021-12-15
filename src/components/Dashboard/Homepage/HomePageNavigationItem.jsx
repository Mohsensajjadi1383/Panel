import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainContext from '../../../Context';
const HomePageNaviagtionItem = (props) => {

            const ctx =useContext(MainContext);

            const ChangeTabHandler = () =>{
                ctx.SetTabStatus(props.tabnumber,props.text)
            }
    return (
            <div onClick={ChangeTabHandler} className={props.customclass + " homepage-navigation-item d-flex flex-row align-items-center"}>
                <FontAwesomeIcon className={props.iconclass + " homepage-navigation-icon"} icon={props.icon} />
                <p className="homepage-navigation-text">{props.text}</p>
            </div>



    )
}
export default HomePageNaviagtionItem