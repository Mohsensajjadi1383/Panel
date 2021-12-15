import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Post = (props) => {

    return (
      <section>

           
        {props.users.data.map((value) =>{
            
            return (

              <div key={value.id}>
                  {JSON.stringify(value)}
              </div>
            )
                  
        })}
        
     

 

      </section>
    )


}

export default Post