import { useState } from "react";


const Country = ({country}) => {
    console.log(country)
    const {name,flags,cca3} = country
    const [visited,setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className="border-4 border-dotted rounded-lg p-5">
            <p>Name : {name.common}</p>
            <img src={flags.png} alt="" />
            <p>code : {cca3}</p>
            <button className="border-2 rounded-lg p-2 bg-slate-200" onClick={handleVisited}>Visited</button><br />
            {visited ? 'I Want to visit' : 'I have alraedy visited'}
        </div>
    );
};

export default Country;