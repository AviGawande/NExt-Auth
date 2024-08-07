import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await axios.post(`${BACKEND_URL}/signup`, {
        username,
        password
      });
      alert("You are signed up");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        value={password}
      />
      <button onClick={handleSignup}>Submit</button>
    </div>
  );
};
