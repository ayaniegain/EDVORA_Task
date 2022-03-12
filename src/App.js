import React from "react";
import NearRide from "./components/NearRide";
import PastRide from "./components/PastRide";
import UpcomingRide from "./components/UpcomingRide";
import UserContext from "./context/UserContext";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FilterData from "./filter_comp/FilterData";

function App() {
  return (
    <>
    <div className="container">

      <nav className="navbar">
      <Link style={{textDecoration: "none"}} to="/NearRide">
        <h2 style={{cursor:"pointer" }}> Edvora </h2>
        </Link>
        <div className="gether">

        <h4>John kattte</h4>
        <img src="https://random.imagecdn.app/500/150" alt="name" className="circular--square" />
        </div>
      </nav>
      <div>
        <Link to="/NearRide">
          <button  className="btn btn1">NearRide</button>
        </Link>
        <Link to="/UpcomingRide">
          <button className="btn btn1">Upcoming ride</button>
        </Link>
        <Link to="/PastRide">
          <button className="btn btn1">past ride</button>
        </Link>
        <Link to="/FilterData">
          <button className=" btn btn1 btn-filter">Filter</button>
        </Link>
      </div>

      <UserContext>
        <Routes>
          <Route path="/">
            <Route index element={<NearRide />} />
          </Route>

          <Route path="/NearRide" element={<NearRide />} />
          <Route path="UpcomingRide" element={<UpcomingRide />} />
          <Route path="PastRide" element={<PastRide />} />
          <Route path="FilterData" element={<FilterData />} />
        </Routes>
      </UserContext>

    </div>
    </>
  );
}

export default App;
