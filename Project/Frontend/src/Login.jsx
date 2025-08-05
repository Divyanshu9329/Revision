import React, { useState, useRef } from 'react';
import { addUserData } from './reduxconfig/UserSlice';
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [msg, setmsg] = useState("")
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const login = async(e)=>{
        e.preventDefault();
        const obj = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(obj);
        const res = await fetch("http://localhost:7979/acrodesk/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        const response = await res.json();
        console.log(response);
        setmsg(response.msg);
        if(response.status) {
            dispatch(addUserData(response.data));
            e.target.reset();
            navigate(`/${response.data.role}/home`)
    }
    }

    return <>
        <section className="page-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-text">
                            <h4>Sing-in User ..</h4>
                            <h1>User Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <form id="contact" onSubmit={login}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h6>User Login</h6>
                                </div>
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
                                    <b className="text-danger">{msg}</b>&nbsp;
                                    <button type="submit" id="form-submit" className="main-gradient-button">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}