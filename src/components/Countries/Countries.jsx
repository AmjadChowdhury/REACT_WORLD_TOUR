import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries,setVisiteCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        console.log('Add this')
        console.log(country)
    }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h5>Visited Countries</h5>
                <ul>

                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;