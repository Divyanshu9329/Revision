// import React, { useState } from 'react'

// const Comp1 = () => {
    // const [Num, setNum] = useState(23);

    // function change(){
    //     setNum()
    // }

//   return (
//     <>
//         <h1>Sample page for UseState.</h1>
//         <b>Number : {num}</b>
//         <br />
//         <br />
//         <button>Increment</button>
//     </>
//   )
// }

// export default Comp1

import React, { useState } from 'react'


const Comp1 = () => {
    const [Num, setNum] = useState(43)

    const Increment = ()=>{
        setNum(Num+1);
    }
    const Deccrement = ()=>{
        setNum(Num-1);
    }
    const add=()=>{
        setNum(Num+10);
    }
    const mul=()=>{
        setNum(Num*10);
    }
    const divide=()=>{
        setNum(Num/10);
    }
  return (
    <>
        <h1>Sample page for UseState.</h1>
        <b>Number : {Num}</b>
        <br />
        <br />
        <button onClick={Increment}>Increment</button> &nbsp;
        <button onClick={Deccrement}>Decrement</button> &nbsp;
        <br />
        <br /><hr />
        <h2>Calci</h2>
        <p>
            <h4>Number: <b>{Num}</b></h4>
            <br />
            <button onClick={add}>add 10</button>
            &nbsp;
            <button onClick={mul}>multiply 10</button>
            &nbsp;
            <button onClick={divide}>Divde 10</button>
        </p>

</>
)
}

export default Comp1