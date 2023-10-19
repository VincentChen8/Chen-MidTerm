import React, { useState } from "react";
import "./register.css";

export const register = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <form className="register-form" onSubmit = {handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={fname} onChange={(e) => setFname(e.target.value)} name="fname" id="fname" placeholder="First name" />
            <label htmlFor="name">Last name</label>
            <input value={lname} onChange={(e) => setLname(e.target.value)} name="lname" id="lname" placeholder="Last name" />
            <label htmlFor="email">email ID</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="joatkins@gmail.com"></input>
            <label htmlFor="number">moblie number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} type="tel" placeholder="905-000-000"></input>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}