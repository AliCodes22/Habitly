import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import BigSidebar from "../../Components/BigSidebar";
import SmallSidebar from "../../Components/SmallSidebar";
import styled from "styled-components";
import { AuthContext } from "../../Context/userContext";

const SharedLayout = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("token"));
    setUser(loggedInUser);
    setIsLoggedIn(true);
  }, [user]);

  const navigate = useNavigate();

  return !user ? (
    navigate("/login")
  ) : (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

export default SharedLayout;
