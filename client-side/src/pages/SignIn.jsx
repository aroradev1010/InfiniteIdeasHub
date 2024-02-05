import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

import "../css/signin.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage("All fields are required");
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link to={"/"}>
        <h1 className="absolute left-20 top-12 font-bold text-[1.5rem] cursor-pointer">
          InfiniteIdeasHub
        </h1>
      </Link>
      <div class="form-container">
        <div class="logo-container">Welcome Back!</div>

        <div class="social-buttons">
          <OAuth />
          {/* <button class="signin">
            <svg
              viewBox="0 0 256 262"
              preserveAspectRatio="xMidYMid"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              ></path>
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              ></path>
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              ></path>
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              ></path>
            </svg>
            Sign in with Google
          </button> */}
        </div>
        <div class="line"></div>
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              onChange={handleChange}
              required=""
              placeholder="Enter your email"
              name="email"
              id="email"
              type="text"
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              onChange={handleChange}
              required=""
              name="password"
              placeholder="Enter your password"
              id="password"
              type="password"
            />
          </div>

          <button type="submit" class="form-submit-btn">
            Sign In
          </button>
          {errorMessage && (
            <div
              className="mb-2 bg-red-600 font-semibold text-center py-3 rounded-lg"
              color=""
            >
              {errorMessage}
            </div>
          )}
        </form>

        <a class="forgot-password-link link" href="#">
          Forgot Password
        </a>

        <p class="signup-link">
          Don't have an account?
          <Link class="signup-link link" to="/sign-up">
            {" "}
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
