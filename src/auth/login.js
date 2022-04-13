import React, { useState } from 'react';
import './login.css';
import PropTypes from 'prop-types';

const users=[
    {
        email:"admin@admin.com",
        pass:"password"
    }
]

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const item=users.find(o=>o.email==username && o.pass==password);
        console.log(item,username,password);
        setToken(username);
    }
 
    return (
        <div className="login">
            <div className='form-wrapper'>
                <div className='title'>
                    Login
                </div>
                <hr />
                <form onSubmit={handleSubmit}>

                    <div className='group'>
                        <label>Username</label>
                        <input required className='input'  onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className='group'>
                        <label>Password</label>
                        <input required type="password" className='input'  onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='group'>
                        <button className='btn'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };