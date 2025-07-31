import React, { useState } from 'react'

const Student = () => {

    const [students,setstudents]=useState([
        {
            roll: 101, name : "Raj", branch: "IT",
            email: "raj@gmail.com", marks:434
        },
        {
            roll: 102, name : "Ram", branch: "CS",
            email: "ram@gmail.com", marks:484
        }
    ])


  return (
    <div>
        <h2 className='alert-success text-center'>Student Records.</h2>

        <table className='table'>
            <thead>
                <tr>
                    <th>Roll Num</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Email</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                {students.map(st=><tr>
                    <td>{st.roll}</td>
                    <td>{st.name}</td>
                    <td>{st.branch}</td>
                    <td>{st.email}</td>
                    <td>{st.marks}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Student