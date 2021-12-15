import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import Attachments from '../components/Dashboard/Homepage/HomePagecomponents/Attachments'
import Profile from '../components/Dashboard/Homepage/HomePagecomponents/Profile'
import Contacts from '../components/Dashboard/Homepage/HomePagecomponents/Contacts'
import Plan from '../components/Dashboard/Homepage/HomePagecomponents/Plan'
import Signature from '../components/Dashboard/Homepage/HomePagecomponents/Signature';
const HomePageRouter = () => {
    return (

        <Fragment>    
            <Route path='dashboard/Homepage/Attachments'  exact>
                <Attachments />
            </Route>

            <Route path='dashboard/Homepage/Profile'  exact>
                <Profile />
            </Route>

            <Route path='/dashboard/Homepage/contacts'  exact>
                <Contacts/>
            </Route>
            <Route path='dashboard/Homepage/Plan'  exact>
                <Plan />
            </Route>
            <Route path='dashboard/Homepage/Signature'  exact>
                <Signature />
            </Route>

        </Fragment>
    )
}

export default HomePageRouter