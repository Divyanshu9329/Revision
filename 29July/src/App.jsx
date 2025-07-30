// const App = ()=>{
//   return(

//   )
// }
// import {Demo} from './components/Demo'
// import {Try} from './Try'

// import Second from './SecondDemo'

// import Demo from './components/Demo'

import React, { useState } from 'react'

import Comp1 from "./components/Comp1"

export default function App(){

  const [index, setindex] = useState(0)

  var DN = [
    {
      color : "white",
      backgroundColor : "Black"
    },
    {
      color : "Black",
      backgroundColor : "white"
    }
  ]
  return(
    <div style={DN[index]}>
    <Comp1/>
    <br />
    <button onClick={
      ()=>{
      if(index==0) 
        setindex(1)
      else{
        setindex(0);
      }}
    }>Day/Night</button>
    {/* <h2>
      Hello sir
    </h2>
    <Try/>
    <Second/>
    <Demo/> */}
    </div>
  )
}


// export default App