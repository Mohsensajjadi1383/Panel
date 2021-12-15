import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/form.css'
const Login = (props) => {

    const history = useHistory()
    const Users = [{
        username: "admin",
        password: 1234
    }]

    const [username, setusername] = useState()
    const [password, setpassword] = useState()


    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const UserNameHandler = (e) => {
        setusername(e.target.value)
    }
    const PasswordHandler = (e) => {
        setpassword(e.target.value)
    }
    const CheckAuthHandler = (e) => {
        Users.find((value) => {
            console.log(username,password)
            if (value.username === username && value.password === parseInt(password)) {
                history.push("/dashboard/Homepage")
                props.Auth(true)
            } else {
                 alert("notfound")
            }
            return 0
        })
    }


    return (
        <section className="container-fluid d-flex justify-content-center  align-items-center h-100">
                
                <div className="circle1" ></div>
                <div className="circle2" ></div>
                <div className="circle3" ></div>

            <form action="" onSubmit={SubmitHandler} className="login-form col-12 col-md-6 col-lg-5 d-flex flex-column">
                <h4 className="text-center login-title">My Contacts Login</h4>
                <input placeholder="username" type="text" onInput={UserNameHandler} />
                <input placeholder="password" type="text" onInput={PasswordHandler} />
                <button onClick={CheckAuthHandler}>
                    submit
                </button>


            </form>

             

        </section>

    )

}


export default Login