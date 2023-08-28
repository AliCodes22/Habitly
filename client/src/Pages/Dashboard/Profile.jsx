import { AuthContext } from "../../Context/userContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return !currentUser ? (
    navigate("/")
  ) : (
    <div>
      <h1></h1>
      <p>{currentUser.name}</p>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default Profile;
