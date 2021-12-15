import React, { Fragment,useContext,useState } from "react";
import { faSearch, faBell, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainContext from "../../../Context";

const Topbox = (props) => {
  const ctx =   useContext(MainContext)
  const [searchmodal,opensearchmodal] = useState(false)
  const [notifmodal,opennotifmodal] = useState(false)
  const [StartAnimation,SetStartAnimation] = useState(false)
    return (<Fragment>
        <div className="col-12 d-flex flex-row top-box-elements">
            <div className="col-2 d-none d-lg-flex justify-content-start"></div>
            <div className="col-11 col-lg-9  d-flex flex-row justify-content-between align-items-center">
                <div>
                    
                    <h4 className="d-none d-lg-block  show-page-title text-nowrap">{ctx.HomePageActiveTabTitle}</h4>
                   <FontAwesomeIcon className="d-block d-lg-none mobile-menu-icon " icon={faBars} onClick={ () =>{ props.onShowMenu(true)}} />    
                </div>
                <div className="d-flex flex-row">
                     <div className="search-container d-flex flex-row">
                     <input type="text" placeholder="Search SomeThing ..." className={searchmodal ? 'd-block  search-input animation ':`search-input ${StartAnimation ? 'close-animation':'d-none'}`} />
                     <div className="profile-search profile-item d-flex justify-content-center align-items-center" onClick={()=>{opensearchmodal(!searchmodal); SetStartAnimation(true) }}>
                        <FontAwesomeIcon className="search" icon={faSearch} />
                    </div>
                     </div>
                
                    <div className="notif-container d-flex flex-row">
                     <div className={notifmodal ? '':''} ></div>

                    <div className="profile-notif  profile-item d-flex justify-content-center align-items-center" onClick={()=>{opennotifmodal(!notifmodal)}}>
                        <FontAwesomeIcon className="bell" icon={faBell}  />
                    </div>
                    </div>

                    <div className="profile-photo  profile-item">
                         <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    </Fragment>)

}


export default Topbox