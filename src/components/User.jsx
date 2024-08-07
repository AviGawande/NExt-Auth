import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/user`, {
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/logout`, {}, {
        withCredentials: true,
      });
      alert("You have been logged out");
      setUserData(null); // Clear user data on logout
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div>
      {userData ? (
        <>
          You're id is {userData.userId}
          <br /><br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
