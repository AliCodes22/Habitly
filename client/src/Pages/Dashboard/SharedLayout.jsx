import { Link, Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import BigSidebar from "../../Components/BigSidebar";
import SmallSidebar from "../../Components/SmallSidebar";
import styled from "styled-components";
import { AuthContext } from "../../Context/userContext";

const SharedLayout = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
    setIsLoggedIn(false);
  }, [user]);

  return !user ? (
    <div>
      <h1>User Not Found</h1>
    </div>
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
