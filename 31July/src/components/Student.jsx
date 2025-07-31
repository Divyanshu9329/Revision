import React, { useRef, useState } from 'react'

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

    const branches = [
        "CS","IT","EC","ME","CI"
    ]

    const [filterBranch, setfilterBranch] = useState("All");

    const rollRef = useRef();
    const nameRef = useRef();
    const branchRef = useRef();
    const emailRef = useRef();
    const marksRef = useRef();

    const add = (event)=>{
        event.preventDefault();
        const ob = {
            roll : rollRef.current.value,
            name : nameRef.current.value,
            branch : branchRef.current.value,
            email : emailRef.current.value,
            marks : marksRef.current.value,
        }
        setstudents([...students,ob]);
        event.target.reset();
    }

    const delstudent = (roll)=>{
        setstudents(students.filter(st=>st.roll!=roll))

    }

    const changeFilter = (e)=>{
        const bh = e.target.innerText;
        // alert(bh);
        setfilterBranch(bh);
    }

  return (
    <div>
        <h2 className='alert-success text-center'>Student Records.</h2>

        <div className='container'>
            <form onSubmit={add}>
            <div className='row mt-3'>
                <div className='col-xl-4'>
                    <input type="number" placeholder='Roll Number' ref={rollRef} className='form-control' required />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-xl-4'>
                    <input type="text" placeholder='Name' ref={nameRef} className='form-control' required/>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-xl-4'>
                    <select className='form-control' ref={branchRef} required >
                        <option value="">Choose Branch</option>
                        {branches.map(bh=><option>{bh}</option>)}
                    </select>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-xl-4'>
                    <input type="text" placeholder='Email' ref={emailRef} className='form-control'required />
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-xl-4'>
                    <input type="number" placeholder='Marks' ref={marksRef} className='form-control'required />
                </div>
            </div>
            <br />
&nbsp;
            <button>Add Data</button>
            <hr />
            </form>
        </div>

        <div>
            <button className='btn-sm btn-success' onClick={changeFilter}>All</button>
            &nbsp;
            &nbsp;
            {branches.map(bh=><>
            <button className='btn-sm btn-primary' onClick={changeFilter}>{bh}</button>
            &nbsp;&nbsp;
            </>)}
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>Roll Num</th>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Email</th>
                    <th>Marks</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {students.filter(st=>filterBranch=="All" || filterBranch==st.branch)
                .map(st=><tr>
                    <td>{st.roll}</td>
                    <td>{st.name}</td>
                    <td>{st.branch}</td>
                    <td>{st.email}</td>
                    <td>{st.marks}</td>
                    <td><button onClick={()=>delstudent(st.roll)} className='btn-sm'>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Student