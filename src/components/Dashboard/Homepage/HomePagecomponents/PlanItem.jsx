import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const PlanItem = (props) =>{

    return(
            
            <div className="col-12 col-lg-3 mt-3 mt-lg-0 plan-item d-flex flex-column justify-content-around ">
                <div className="plan-icon ">
                    <FontAwesomeIcon className={props.iconclass} icon={faMedal} />
                </div>
                <div className="plan-texts  ">
                    <div>
                        <h5>-{props.month} Months</h5>
                        <h5>-{props.contacts} Contacts</h5>
                        <h5>-No Advertise</h5>
                    </div>

                </div>

                <div className="plan-btn ">
                     <h4>{props.price}</h4>
                    <button className="btn">
                        Choose This Plan
                    </button>
                </div>
            </div>
            
    )
}
export default PlanItem