import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../Context/userContext";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(AuthContext);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: #ff6c3bb5;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #030703;
      padding: 1rem 0;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: #c2b0bf;
      transition: 0.3s ease-in-out all;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: #8c4186;
    }
    .pending {
      background: #f8fafc;
    }
  }
`;
export default BigSidebar;
