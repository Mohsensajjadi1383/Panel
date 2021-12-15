import React,{useState} from "react";
import Routerview from './Routers/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContext from './Context'
function App() {

  const [HomePageActiveTab,SetHomePageActiveTab] = useState(1)
  const [HomePageActiveTabTitle,SetHomePageActiveTabTitle] = useState("Profile & Security")
  return (

    <MainContext.Provider value={{
      HomePageActiveTab:HomePageActiveTab,
      HomePageActiveTabTitle:HomePageActiveTabTitle,
      SetTabStatus:(num,title) =>{
        SetHomePageActiveTab(num)
        SetHomePageActiveTabTitle(title) 
      }
      }}>

    
       <section className="h-100">
       <Routerview/>

         
       </section>
       </MainContext.Provider>
         

    
  );
}

export default App;
