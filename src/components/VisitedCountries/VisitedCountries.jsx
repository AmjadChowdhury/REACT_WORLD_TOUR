
const VisitedCountries = ({country}) => {
    const {name,flags} = country
    return (
        <div className="border-2 border-fuchsia-400 rounded-lg p-2 bg-purple-200">
            <h1 className="text-2xl font-bold text-center">{name.common}</h1>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default VisitedCountries;