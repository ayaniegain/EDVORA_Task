import React,{useState,useEffect, createContext} from 'react'

// given url----------
const Rideurl="https://assessment.api.vweb.app/rides"
const userUrl="https://assessment.api.vweb.app/user"
// let Rideurl=""
// let userUrl=""
export const UserContext = createContext()


function UserContextcomp({children}) {
    // declired state-----------
    const [dataRider, setDataRider] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [loading, setLoading] = useState(false)
  
  /////////rider url----------
  const RidingDataFetch=async()=>{
    const response=await fetch(Rideurl)
  
    if(!response.ok){
      const message = `An error occured: ${response.status}`;
      throw new Error(message);
  }
    setLoading(false)
    const ResponseJsonRider=await response.json()
    setDataRider(ResponseJsonRider)
  }
  
  
  ////////userUrl-----------
  const UserDataFetch=async()=>{
    const response=await fetch(userUrl)
    
    if(!response.ok){
      const message = `An error occured: ${response.status}`;
      throw new Error(message);
    }
    setLoading(false)
    const ResponseJsonuser=await response.json()
    setDataUser(ResponseJsonuser)
  }
  useEffect(() => {
    RidingDataFetch()
    
  }, [])
  useEffect(() => {
    UserDataFetch()
    
  }, [])
  /////////---------loading componant
  if (loading) {
    return(
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <UserContext.Provider value={{dataRider:dataRider,dataUser:dataUser}}>
    {children}
    </UserContext.Provider>
  )
}


export default UserContextcomp