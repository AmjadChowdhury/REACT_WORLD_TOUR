import { useEffect, useState } from "react";
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";


const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountries,setVisiteCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        console.log(country)
        const newVisitdCountries = [...visitedCountries,country]
        setVisiteCountries(newVisitdCountries)
    }
    return (
        <div>
            <div>
                <h5 className="text-center text-2xl text-fuchsia-600 font-bold">Visited Countries : {visitedCountries.length}</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-1">
                    {
                        visitedCountries.map(country => <VisitedCountries key={country.cca3} country={country}></VisitedCountries>)
                    }
                </div>
            </div>
            <h1 className="text-2xl text-center font-bold text-green-600 mt-3">Country List</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 mx-1">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;