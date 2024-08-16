import React, { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign In:', { email, password });
    };

    return (
        <div className='sign'>
        <div className="container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
               
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <p>Forgot Password ? <a href="SignUp.js">Click Here</a></p>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <style jsx>{`
                .mb-3 {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: #f9f9f9;
                }
                h2 {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .mb-3 {
                    margin-bottom: 15px;
                }
                .form-label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .form-control {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .btn {
                    width: 100px;
                    padding: 10px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
        </div>
    );
}

export default SignIn;
