import React,{useState} from 'react';
// import axios from 'axios'
import '../assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationItem from './UI/NavigationItem'
import TopBox from './Dashboard/TopBox/TopBox'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFile,faBars, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import DashboardRouterView from '../Routers/DashboardRouter'
import TopBoxMobile from './Dashboard/TopBox/TopBoxMobile'

const Dashboard = () => {
    const [ShowMenu,SetShowMenu] = useState(false)
    const ShowMenuHandler = (status) =>{
         SetShowMenu(status)
    }
    return (
        <section className="h-100 main-container">
            <div className="col-12 p-0 top-box ">
                <TopBox onShowMenu={ShowMenuHandler} />
                <TopBoxMobile/>
            </div>

            <div className="col-12 boxs-container p-0 d-flex flex-row ">

                <div className={`${ShowMenu ? 'showmobilemenu':'hidemobilemenu'}  col-2   d-lg-flex flex-column justify-content-between navigation-container `}>
                         
                         <div className="d-flex d-lg-none">
                             <FontAwesomeIcon onClick={() => {ShowMenuHandler(false)}} className="mobile-close-menu-icon" icon={faTimes} />
                         </div>
                           
                    <div className="navigation-bar col-12">

                        <NavLink to='/dashboard/Homepage' activeClassName="actived-route" onClick={() => {ShowMenuHandler(false)}} >
                            <NavigationItem classes="homeicon" icon={faHome} text="Home" />
                        </NavLink>

                        <NavLink to="/dashboard/Filespage" activeClassName="actived-route" onClick={() => {ShowMenuHandler(false)}}>
                            <NavigationItem classes="fileicon" icon={faFile} text="All files" />
                        </NavLink>

                        <NavLink to="/dashboard/Moreoptions" activeClassName="actived-route" onClick={() => {ShowMenuHandler(false)}}>
                            <NavigationItem classes="moreicon" icon={faBars} text="More options" />
                        </NavLink>

                    </div>
                    <div className="navigation-footer">
                        <img src="https://i.pinimg.com/originals/1e/7f/75/1e7f750c0f024e9746ccbf623a689539.png" itemType="image" alt="" />
                        <p className="upgrade-title" >Upgrade Your Plan <FontAwesomeIcon className="arrowright" icon={faArrowRight} /> </p>
                    </div>

                </div>

                <div className="col-11 col-lg-9 show-container ">
                    <DashboardRouterView />
                </div>
            </div>

        </section>
    )

}

export default Dashboard

// app-id 60fafdf9e37f5b30d020c544
