import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ContactItem from "./ContactItem"
const Contacts = () => {

    const [data, setdata] = useState(null)
    useEffect(() => {
        const config = {
            method: "GET",
            url: "https://randomuser.me/api/?results=100  ",

        }
        axios(config)
            .then((res) => {
                console.log(res)
                setdata(res.data.results)
            })
            .catch((err) => { console.log(err) })

    }, [])

    const EditOnclickHandler = (ID) => {
        data.forEach((value) => {

            if (value.login.sha256 === ID) {
            const index = data.indexOf(value);
            data.splice(index,1)
            setdata(() =>{
            return [...data]
            })

            }

        })
    }
    return (
        <div className="col-12 contacts-table d-flex align-items-center flex-column">
            <div className="contacts-title-row col-12 d-flex flex-row justify-content-center ">
                <div className="checkbox-container"></div>
                <div className="contacts-title-row-item"><h6 className="contacts-title-item">Name</h6></div>
                <div className="contacts-title-row-item"><h6 className="contacts-title-item">Email</h6></div>
                <div className="contacts-title-row-item company"><h6 className="contacts-title-item">Company</h6></div>
                <div className="contacts-title-row-item"><h6 className="contacts-title-item">Job Title</h6></div>
                <div className="contacts-title-row-item"><h6 className="contacts-title-item">Status</h6></div>
            </div>


            {data && data.map((value) => {
                return (
                    <ContactItem EditOnClick={EditOnclickHandler} data={value} id={value.login.sha256} key={value.login.sha256} />
                )

            })}



        </div>
    )
}
export default Contacts