import React from 'react'

const SecondDemo = () => {

    var msg = "Hello every one how are you."
    var num1 = 33;
    var num2 = 21;

    const city = [
        "Indore","Bhopal","Kanpur","Ujjain"
    ]

  return (
    <>
        <h4>{msg}</h4>
        <p>{city}</p>
        <ol>
            <li>{city[0]}</li>
            <li>{city[1]}</li>
            <li>{city[2]}</li>
            <li>{city[3]}</li>
        </ol>
        <p>{num1}*{num2}={num1*num2}</p>
    </>
  )
}

export default SecondDemo;