import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>Already a user?</p>
        <Link to="/login" className="member-btn btn">
          Login
        </Link>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    width: 90vw;
    max-width: 400px;
    border-top: 5px solid red;
    background: #f8fafc;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f8fafc;
    border: 1px solid gray;
    color: black;
    height: 35px;
  }
  .form-label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    letter-spacing: 1px;
    line-height: 1.5;
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }

  .btn-block {
    width: 100%;
  }
  .member-btn {
    color: gray;
    margin-left: 0.25rem;
  }
`;

export default Register;
