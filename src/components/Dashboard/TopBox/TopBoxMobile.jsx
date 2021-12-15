import React, { useContext } from 'react';
import MainContext from '../../../Context';
const TopBoxMobile = () => {

  const ctx = useContext(MainContext);
  return (
    <div className="col-12  mt-3 d-flex justify-content-center">


      <div className=" d-block d-lg-none mt-2 col-11 text-center" >

        <h4 className="show-page-title text-nowrap text-center">{ctx.HomePageActiveTabTitle}</h4>

      </div>
    </div>

  )
}

export default TopBoxMobile