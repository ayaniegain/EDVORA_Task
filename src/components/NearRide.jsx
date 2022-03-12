import React from 'react'
import { useState, createContext, useContext } from "react";
import { UserContext } from "../context/UserContext";

// import "./Nearride.css"

function NearRide() {
    const allData = useContext(UserContext);
    let{dataRider,dataUser}=allData

    
    
    let user1=(dataUser.station_code);
    let user2=(dataUser.station_code+1);
    let user3=(dataUser.station_code+2);
    
    return (
        <>
    
   
      <section>
      {
        dataRider.map((e)=>{
            const {id,city,date,map_url,state,station_path,origin_station_code}=e
    
      let val1=(station_path.find((item)=>item==user1))
      let val2=(station_path.find((item)=>item==user2))
      let val3=(station_path.find((item)=>item==user3))
    
           
if(val1){
      return(
  <React.Fragment key={id}>
  <div className="container-details">

  <section className="img">

          <img src={map_url} alt={id}  />
  </section>
  <article className="body">

          <h4>Ride id:{id}</h4>
          <h4>Origin Station:{origin_station_code}</h4>
          <h4>station_path:{station_path} </h4>
          <h4>Date:{date}</h4>
          <h4>state:{state}</h4>
          <h4>city:{city}</h4>
          <h4>distance:{val1-user1}</h4>
  </article>
  </div>
</React.Fragment>
      )
      }
if(val2){


    return(
<React.Fragment key={id}>  
          <img src={map_url} alt={id}   />
          <h4>Ride id:{id}</h4>
          <h4>Origin Station:{origin_station_code}</h4>
          <h4>station_path:{station_path} </h4>
          <h4>Date:{date}</h4>
          <h4>city:{city}</h4>
          <h4>distance:{val2-user1}</h4>
</React.Fragment>
      )

}

if(val3){


return(
<React.Fragment key={id}>  
      <img src={map_url} alt={id}   />
      <h4>Ride id:{id}</h4>
      <h4>Origin Station:{origin_station_code}</h4>
      <h4>station_path:{station_path} </h4>
      <h4>Date:{date}</h4>
          <h4>city:{city}</h4>
          <h4>distance:{val3-user1}</h4>
</React.Fragment>
  )

}




        })

}
      </section>
      </>
  )
}

export default NearRide