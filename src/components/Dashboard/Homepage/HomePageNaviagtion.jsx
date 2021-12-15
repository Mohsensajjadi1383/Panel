import React from 'react'
import { faUserCircle, faSignature, faAddressBook, faPaperclip, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import HomePageNaviagtionItem from './HomePageNavigationItem'
const HomePageNavigation = (props) => {
   
    return (
        <div className="homepage-navigation">            
            <HomePageNaviagtionItem  tabnumber={1} customclass={ props.ActiveTabNumber === 1  ?  "active-tab ":"" } iconclass="usercircle"   text="Profile & Security" icon={faUserCircle}  />
            <HomePageNaviagtionItem  tabnumber={2} customclass={ props.ActiveTabNumber === 2  ?  "active-tab ":"" } iconclass="signature"     text="My Signature" icon={faSignature} />
            <HomePageNaviagtionItem  tabnumber={3} customclass={ props.ActiveTabNumber === 3  ?  "active-tab ":"" } iconclass="contactsbook"  text="My Contacts" icon={faAddressBook} />
            <HomePageNaviagtionItem  tabnumber={4} customclass={ props.ActiveTabNumber === 4  ?  "active-tab ":"" } iconclass="attachment"     text="Attachments" icon={faPaperclip} />
            <HomePageNaviagtionItem  tabnumber={5} customclass={ props.ActiveTabNumber === 5  ?  "active-tab ":"" } iconclass="plancard"      text="My Plan" icon={faCreditCard} />
        </div>
    )
}
export default HomePageNavigation 