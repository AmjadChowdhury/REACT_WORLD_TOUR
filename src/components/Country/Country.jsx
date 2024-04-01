import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  console.log(country);
  const { name, flags, cca3, population, region, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`border-4 border-dotted rounded-lg p-5 flex flex-col ${
        visited ? "bg-green-400" : "bg-teal-200"
      }`}
    >
      <div className="flex-grow">
        <p className="text-center text-2xl font-extrabold">{name.common}</p>
        <img src={flags.png} alt="" />
        <p className="text-xl font-bold mt-2">Population : {population}</p>
        <p className="text-xl font-bold">Region : {region}</p>
        <p className="text-xl font-bold">Area : {area}</p>
        <p className="text-xl font-bold">code : {cca3}</p>
      </div>
     <div className="flex">
        <button className="border-2 rounded-lg p-2 bg-blue-500 text-white  mr-2" onClick={handleVisited}>{visited? 'OnGoing': 'Visited'}</button>
        <button className="border-2 rounded-lg p-2 bg-fuchsia-500 text-white" onClick={() => handleVisitedCountries(country)}> Mark as visited</button>
     </div>
    </div>
  );
};

export default Country;
