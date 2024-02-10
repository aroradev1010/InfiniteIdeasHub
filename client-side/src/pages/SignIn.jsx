import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import OAuth from "../components/OAuth";
import { useSelector } from "react-redux";

import "../css/signin.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
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
            {loading ? <>loading....</> : <>Sign In</>}
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
