import React from 'react'

const Demo = () => {
    const city = [
        "Indore","Bhopal","Kanpur","Ujjain"
    ]

    // const place = [
    //     <li>Indore</li>,
    //     <li>Bhopal</li>,
    //     <li>Ujjain</li>,
    //     <li>Bhopal</li>,
    // ]

  return (
    <>
    Demo
    <hr />
    <h1>Component..1</h1>
    <hr />
    {/* <ol>{place}</ol> */}
    <ol>
        {city.map(ct=><li>{ct}</li>)}
    </ol>
    <hr />
    {/* <ol>
        {place.map(ct=><li>{ct}</li>)}
    </ol> */}
    </>
  )
}

// type of export..
// 1. Named export. like this.
// export function demo(){}      we can only use export keyword only before the declaration

export default Demo