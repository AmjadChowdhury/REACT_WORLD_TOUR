

const Country = ({country}) => {
    console.log(country)
    const {name,flags} = country
    return (
        <div className="border-2 border-dotted rounded-lg p-5">
            <p>Name : {name.common}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;