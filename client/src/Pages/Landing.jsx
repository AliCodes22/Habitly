import styled from "styled-components";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav></nav>
      <div className="container page">
        <div className="info">
          <h1>Habitly</h1>
          <p>
            A platform to systematically build positive habits and eliminate
            disempowering ones
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .container {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
  }
  .page {
    min-height: calc(100vh - 90vw);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 2;
    color: #e1d3ec;
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

export default Landing;
