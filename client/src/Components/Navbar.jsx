import styled from "styled-components";
import { useState, useContext } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown, FaUser } from "react-icons/fa";
import { AuthContext } from "../Context/userContext";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            console.log("toggle");
          }}
        >
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            <FaUserCircle /> Ali <FaCaretDown />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: #2cb1bc;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }

    .dropdown {
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-align: center;
      visibility: hidden;
      border-radius: 0.25rem;
      background: #2cb1bc;
    }
    .show-dropdown {
      visibility: visible;
    }

    .dropdown-btn {
      border-radius: 0.25rem;
      padding: 0.5rem;
      background: transparent;
      border-color: transparent;
      color: #fff;
      letter-spacing: 1px;
      text-transform: capitalize;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;

export default Navbar;
