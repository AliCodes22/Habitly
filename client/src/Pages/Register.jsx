import styled from "styled-components";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/userContext";
import Input from "../Components/Input";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      const { name, email, userId } = data.data;
      const token = JSON.stringify(data.token);

      localStorage.setItem("token", token);
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("userId", JSON.stringify(userId));
      setCurrentUser({
        name,
        email,
        userId,
      });

      navigate("/dashboard");
    } catch (err) {
      window.alert(err.message);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Register</h4>
        <Input
          name="name"
          type="text"
          labelText="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          labelText="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          labelText="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a user?{" "}
          <Link to="/login" className="member-btn btn">
            Login
          </Link>
        </p>
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
    border-top: 2px solid red;
    background: #f8fafc;
    border-radius: 2rem;
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
    font-size: 2rem;
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
