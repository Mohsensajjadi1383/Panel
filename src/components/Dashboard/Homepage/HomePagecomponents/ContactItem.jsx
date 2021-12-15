import { useState, Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
const ContactItem = (props) => {

    const [ToolsStatus, SetToolsStatus] = useState(false)
    const ToolsStatusHandler = (value) => {
        SetToolsStatus(value)
    }
    return (
        <Fragment>


            <div className="contacts-row  d-flex  justify-content-center " onMouseEnter={() =>{ToolsStatusHandler(true)} } onMouseLeave={() =>{ToolsStatusHandler(false)} }>
                <div className="d-none d-lg-block checkbox-container"><input type="checkbox" /></div>
                <div className="contacts-row-item">
                    <img src={props.data.picture.large} alt="userimage" />
                    <p className="name-title">{props.data.name.title + " " + props.data.name.first + " " + props.data.name.last}</p>
                </div>
                <div className="contacts-row-item">
                    <p>{props.data.email}</p>
                </div>
                <div className="contacts-row-item company">
                    <p>amazon</p>
                </div>
                <div className="contacts-row-item">
                    <p>
                        Front-End Developer
                    </p>
                </div>
                <div className=" contact-tools">
                    <div className="job-status-active">
                        <span>Active</span>
                    </div>
                    <div  onClick={()=>{props.EditOnClick(props.id)}} className={ToolsStatus ? "showtoolsicon deleteicon" : "deleteicon"}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                    <div className="job-status-active-mobile">
                        <span>Active</span>
                    </div>
                    <div className={ToolsStatus ? "showtoolsicon editicon" : "editicon"}>
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                </div>
            </div>



        </Fragment>
    )
}
export default ContactItem