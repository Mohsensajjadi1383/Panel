import React,{useContext} from 'react'
import HomePageNavigation from './HomePageNaviagtion'
import Contacts from './HomePagecomponents/Contacts'
import Profile from './HomePagecomponents/Profile'
import Signature from './HomePagecomponents/Signature'
import Plan from './HomePagecomponents/Plan'
import Attachments from './HomePagecomponents/Attachments'
import MainContext from '../../../Context'
const HomePage = () => {

// const [ActiveTab,SetActiveTab] = useState(1)


const ctx = useContext(MainContext)

const SetActiveTabNumberHandler = (TabNumber) =>{
  // SetActiveTab(TabNumber)
  ctx.HomePageActiveTab = TabNumber
}

  return (
    <section className="homepage-container">
      <HomePageNavigation ActiveTabNumber={ctx.HomePageActiveTab} SetActiveTabNumber={SetActiveTabNumberHandler}  />

      <section className="tabs-container">

      {ctx.HomePageActiveTab === 1  && <Profile/>}  
      {ctx.HomePageActiveTab === 2  && <Signature/>}  
      {ctx.HomePageActiveTab === 3  && <Contacts/>}  
      {ctx.HomePageActiveTab === 4  && <Attachments/>}  
      {ctx.HomePageActiveTab === 5  && <Plan/>}  

      </section>

    </section>
  )

}

export default HomePage