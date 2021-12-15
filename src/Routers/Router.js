import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Login from '../components/Login'
import Dashboard from "../components/Dashboard"

const MainRouter = () => {
    const [auth, setauth] = useState(Boolean(localStorage.getItem("AUTH")));
    const AuthHandler = (status) => {
        console.log(status);
        setauth(status)
        localStorage.setItem("AUTH",true)
    }

    return (
        <Router>
            <Switch>
                <Route path="/dashboard" >
                    {auth ? <Dashboard /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login" exact>
                    <Login Auth={AuthHandler} />
                </Route>

                <Route path="/" exact >
                    <Redirect to="/login" />
                </Route>

                <Route path="*" exact >
                    {auth ? <Dashboard /> : <Redirect to="/login" />}
                </Route>
            </Switch>
        </Router>
    )
}


export default MainRouter