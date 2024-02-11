import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import "../css/signup.css";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(
        "https://infiniteideashub.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
        <div class="logo-container">Hello Friend, register now</div>

        <div class="social-buttons">
          <OAuth />
        </div>
        <div class="line"></div>
        <form class="form capitalize" onSubmit={handleSubmit}>
          <div class="form-group ">
            <label for="email">username</label>
            <input
              onChange={handleChange}
              required=""
              placeholder="Enter your username"
              name="usernae"
              id="username"
              type="text"
            />
          </div>
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
            {loading ? <>loading....</> : <>Sign Up</>}
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

        <p class="signup-link">
          Already have an account?
          <Link class="signup-link link" to="/sign-in">
            {" "}
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}
