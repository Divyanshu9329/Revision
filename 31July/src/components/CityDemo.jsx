import React, { useRef, useState } from 'react'

const CityDemo = () => {

    const [cities, setCity] = useState([
        "indore","ujjain","Bhopal"
    ]);

    const cityRef = useRef();

    const add = ()=>{
        const city = cityRef.current.value;
        setCity([...cities,city])
    }

    const delCity=(event)=>{
        const city = event.target.innerText;
        setCity(cities.filter(ct=>ct!=city))
    }

  return (
    <div>
        <h2>City Records..</h2>
        <input type="text" ref={cityRef} placeholder='City' /> 
        &nbsp;
        <button onClick={add}>Add</button>
        <ul>
            {cities.map(ct=><li onClick={delCity} style={{cursor: 'pointer'}}>{ct}</li>)}
        </ul>
    </div>
  )
}

export default CityDemo