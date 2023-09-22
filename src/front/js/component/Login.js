import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";










function login() {

	const { actions, store } = useContext(Context)
	const navigate = useNavigate()

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = async (event) => {
		event.preventDefault();

        try {
          // Assuming actions.create_token returns a boolean indicating success
          const isLogged = await actions.create_token(event, email, password);
    
          if (isLogged) {
            navigate("/Private");
          } else {
            alert("Invalid credentials");
          }
        } catch (error) {
          // Handle network or other errors
          console.error("Login error:", error);
        }
      };

    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={loginHandler}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }


export default login;