import React from 'react'
import { useState, createContext, useContext } from "react";
import { UserContext } from "../context/UserContext";


const d = new Date();

let months = d.getMonth() + 1;
let day = d.getDate();
let year = d.getFullYear();

if (months < 10) {
  months = `0${months}`
} if (day < 10) {
  day = `0${day}`
}

let totalYear = `${months}/${day}/${year}`

// console.log("year",totalYear)

////////////time
const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

var time = (formatAMPM(new Date()));


let finalDateandTime = `${totalYear} ${time}`

// console.log(finalDateandTime); ///💎

function PastRide() {
  const allData = useContext(UserContext);
  let { dataRider, dataUser } = allData


  // let dateArry=[]
  // return(/

  return (
    <>
     {

        dataRider.map((e,index) => {
            
          if (e.date > finalDateandTime) {
          return(

            <React.Fragment key={index}>


              <img src={e.map_url} alt={e.id} key={index} />
              <h4>Ride id:{e.id}</h4>
              <h4>Origin Station:{e.origin_station_code}</h4>
              <h4>station_path:{e.station_path} </h4>
              <h4>Date:{e.date}</h4>
              <h4>state:{e.state}</h4>
              <h4>city:{e.city}</h4>
            </React.Fragment>
          )
          }
        })
      }

    </>
  )
}

export default PastRide