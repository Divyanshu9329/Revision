import { useState } from "react";
import { useRef } from "react";

export default function Register() {

    const [constants, setconstants] = useState(undefined);

    const useEffect(() => {
      
    
      return () => {
        second
      }
    }, [third])
    

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const departmentRef = useRef();
    const roleRef = useRef();

    const loadConstants = ()=>{
        const pr = fetch("http://localhost:7979/acrodesk/constants");
        pr.then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    loadConstants();

    const register = async(e)=>{
        e.preventDefault();
        const obj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            department: departmentRef.current.value,
            role: roleRef.current.value
        }

        const res = await fetch("http://localhost:7979/acrodesk/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
    }

    return <>
        <section className="page-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-text">
                            <h4>Hello User ..</h4>
                            <h1>User Registeration</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="contact-us">
            <div className="container">
                <div className="row">
                    <form id="contact" onSubmit={register}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h6>Register Here</h6>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="text" ref={nameRef} placeholder="Name" required />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="email" ref={emailRef} placeholder="Email" required />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
                                <fieldset>
                                    <input type="password" ref={passwordRef} placeholder="Password" required />
                                </fieldset>
                            </div>

                            <div className="col-lg-12">
                                <fieldset>
                                    <select required ref={departmentRef}>
                                        <option value="">Choose Department</option>
                                    </select>
                                </fieldset>
                            </div>

                            <div className="col-lg-12">
                                <fieldset>
                                    <select required ref={roleRef}>
                                        <option value="">Choose Role</option>
                                    </select>
                                </fieldset>
                            </div>

                            <div className="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="main-gradient-button">Register</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    </>
}