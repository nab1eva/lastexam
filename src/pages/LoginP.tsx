import { useAuth } from "../states/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginP = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = { username: username, password: password };
  return (
    <div className="container">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
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
        <button className="button" onClick={() => login(data, navigate)}>
          Login
        </button>
        <p className="login-reg">
          Don't have an account?
          <Link to="/register">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginP;
