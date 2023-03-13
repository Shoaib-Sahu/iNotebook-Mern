import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../actions/AuthAction';

const Auth = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading);
    const [isSignUp, setIsSignUp] = useState(true);

    const formData = {
        name: "",
        email: "",
        password: "",
        confirmpass: "",
    };
    const [data, setData] = useState(formData);
    const [confirmPass, setConfirmPass] = useState(true);

    // handle Changes in input
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmPass(true);
        if (isSignUp) {
            data.confirmpass === data.password
                ? dispatch(signUp(data))
                : setConfirmPass(false);
        } else {
            dispatch(logIn(data));
        }
    };

    // Reset Form
    const resetForm = () => {
        setConfirmPass(confirmPass);
        setData(formData);
    };

    return (
        <div className='container my-5'>
            <form onSubmit={handleSubmit}>
                <h3 className='my-4'>{isSignUp ? "Sign Up" : "Log In"}</h3>
                {isSignUp &&
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="name"
                            className="form-control"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                }
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        minLength={6}
                    />
                </div>

                {isSignUp &&
                    <div className="mb-3">
                        <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
                        <span style={{
                            display: confirmPass ? "none" : "block",
                            color: "red",
                            fontSize: "12px",
                        }}>
                            * Confirm Password is not same
                        </span>

                        <input
                            type="password"
                            className="form-control"
                            name="confirmpass"
                            onChange={handleChange}
                            required
                        />
                    </div>
                }
                <span
                    style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        fontSize: "14px"
                    }}
                    onClick={() => {
                        resetForm();
                        setIsSignUp((prev) => !prev);
                    }}
                >
                    {isSignUp
                        ? " Already have an account. Login!"
                        : "Don't have an account? Sign Up"}
                </span>
                <button
                    disabled={loading}
                    type="submit"
                    className="btn btn-dark mx-3">
                    {loading ? "Loading..." : isSignUp ? "SignUp" : "LogIn"}
                </button>
            </form>
        </div>
    )
}

export default Auth