import { registerAuth } from "../states/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const RegisterP = () => {
  const { register } = registerAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const data = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };
  return (
    <div className="container">
      <div className="login-container">
        <h1 className="login-title">Register</h1>
        <div className="inputs">
          <input
            className="login-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
          />
          <input
            className="login-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
          <input
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="button" onClick={() => register(data, navigate)}>
          Register
        </button>
        <p className="login-reg">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterP;
