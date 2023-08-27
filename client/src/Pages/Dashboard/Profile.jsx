import { AuthContext } from "../../Context/userContext";
import { useState, useEffect, useContext } from "react";

const Profile = () => {
  const { user, setUser, setIsLoggedIn, setShowSideBar } =
    useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
};

export default Profile;
