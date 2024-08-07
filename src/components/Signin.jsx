import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      await axios.post(`${BACKEND_URL}/signin`, {
        username,
        password
      }, {
        withCredentials: true
      });
      alert("You are logged in");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in. Please check your credentials and try again.");
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
      <button onClick={handleSignin}>Submit</button>
    </div>
  );
};
