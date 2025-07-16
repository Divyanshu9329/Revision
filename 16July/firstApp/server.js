const express = require('express')

// server object (app or server or any name)
const app = express()


const port = 3030;

app.get('/', (req, res) => {
  res.send('Hello World!')
//     res.write("Welcome to the AITR");    // write function tells what what to done.\
//     res.send();
})

// Starting the server or app
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})