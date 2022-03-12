import React from 'react'

function State({dataRider,filterValue}) {


    // console.log(dataRider);
    // console.log(filterValue);
    
    return (
        <React.Fragment >{
        dataRider.map((e,i)=>{
            
        {/* console.log(e.city); */}

            if(e.state==filterValue){
                return(
                    <>
                    <img src={e.map_url} alt={e.id} key={e.id} />
    <h4>Ride id:{e.id}</h4>
    <h4>Origin Station:{e.origin_station_code}</h4>
    <h4>station_path:{e.station_path} </h4>
    <h4>Date:{e.date}</h4>
    <h4>state:{e.state}</h4>
    <h4>city:{e.city}</h4> 

                    </>
                )
            }
        })
    }

{/* 
    <img src={e.map_url} alt={e.id} key={index} />
    <h4>Ride id:{e.id}</h4>
    <h4>Origin Station:{e.origin_station_code}</h4>
    <h4>station_path:{e.station_path} </h4>
    <h4>Date:{e.date}</h4>
    <h4>state:{e.state}</h4>
    <h4>city:{e.city}</h4> */}
  </React.Fragment>
  )
}

export default State