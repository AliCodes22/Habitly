import { AuthContext } from "../../Context/userContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setIsLoggedIn } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserName = JSON.parse(localStorage.getItem("name"));
    const currentUserEmail = JSON.parse(localStorage.getItem("email"));

    setCurrentUser({
      currentUserName,
      currentUserEmail,
    });
  }, [user]);

  return !currentUser.currentUserName ? (
    navigate("/login")
  ) : (
    <div>
      <h1>{currentUser.currentUserName}</h1>
      <p>{currentUser.currentUserEmail}</p>
    </div>
  );
};

export default Profile;
