import React from "react";
import { useState, createContext, useContext } from "react";
import { UserContext } from "../context/UserContext";
import City from "./City";
import State from "./State";

function FilterData() {
    const [filterValue, setFilterValue] = useState("");

    // console.log(filterValue);
    const allData = useContext(UserContext);
    let { dataRider } = allData;

    //     const allCategories = [new Set(dataRider.map((item) => item.state))];
    // console.log(allCategories);

    const handleChange = (e) => {
        setFilterValue(e.target.value);
    };

    return (
        <div className="container" style={{margin:"20px", padding:"10px"}}>
        <label htmlFor="">state</label>
            <select value={filterValue} onChange={handleChange}  style={{margin:"20px", padding:"10px"}}>
                {dataRider.map((e, i) => {
                    return (
                        <>
                            <option key={e} value={e.state}>{e.state}</option>
                        </>
                    );
                })}
            </select>
            <br />
                    <label htmlFor="">city</label>
            <select value={filterValue} onChange={handleChange} style={{margin:"20px", padding:"10px"}}>
                {dataRider.map((e, i) => {
                    return (
                        <>
                            <label>city</label>
                            <option key={e} value={e.city}>{e.city}</option>
                        </>
                    );
                })}
            </select>
            <section>

                <City  dataRider={dataRider} filterValue={filterValue} />
                <State dataRider={dataRider} filterValue={filterValue} />
            </section>

        </div>
    );
}

export default FilterData;
