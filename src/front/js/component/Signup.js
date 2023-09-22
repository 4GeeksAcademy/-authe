import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function create_user(event) {
    event.preventDefault();
    console.log(email, "Email", password, "Password");
    try {
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name, // Add name to the request body
          email: email,
          password: password,
        }),
      };
      const resp = await fetch(process.env.BACKEND_URL + "api/signup", opts);

      if (resp.ok) {
        alert("Registration successful");
        navigate("/login");
        return await resp.json();
      } else {
        alert("There has been some error");
      }
    } catch (error) {
      console.error("There was an Error!!!", error);
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={create_user}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
