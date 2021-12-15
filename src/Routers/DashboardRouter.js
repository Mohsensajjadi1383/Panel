import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import HomePage from "../components/Dashboard/Homepage/Homepage"
import FilesPage from "../components/Dashboard/Filespage/Filespage"
import MoreOptions from '../components/Dashboard/MoreOptions'
const DashboardRouter = () => {
    return (
        <Fragment>
            <Route path="/dashboard/Homepage" exact>
                <HomePage />
            </Route>

            <Route path="/dashboard/Filespage" exact>
                <FilesPage />
            </Route>

            <Route path="/dashboard/Moreoptions" exact>
                <MoreOptions />
            </Route>


        </Fragment>
    )
}

export default DashboardRouter