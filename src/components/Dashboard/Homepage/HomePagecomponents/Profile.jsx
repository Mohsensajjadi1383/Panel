const Profile = () =>{
    return(
        <section className="profile">
           <div className="col-8 d-flex flex-column flex-lg-row">
               <div className="col-lg-6 profile-image-container  d-flex justify-content-center align-items-center">
                   <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg" alt="" />
               </div>
               <div className=" col-lg-6 profile-info-container d-flex justify-content-center align-items-center">
                   <div className="profile-info p-3 p-lg-0 ">
                     <h4 className="profile-info-item text-center text-lg-start ">Name: Sofie Dossi</h4> 
                     <h4 className="profile-info-item text-center text-lg-start ">Email: SofieDossi@example.com</h4> 
                     <h4 className="profile-info-item text-center text-lg-start ">Phone:+0118435321</h4>
                     <h4 className="profile-info-item text-center text-lg-start ">Plan: Free</h4>
                    </div>                   
               </div>
           </div>
        </section>
    )
}

export default Profile 