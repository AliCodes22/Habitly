import FormRow from "../../Components/FormRow";
import { AuthContext } from "../../Context/userContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [name, setName] = useState(currentUser?.name);
  const [email, setEmail] = useState(currentUser?.email);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await res.json();
    setCurrentUser({
      ...currentUser,
      name: data.data.name,
      email: data.data.email,
    });

    toast.success("User updated successfully");
  };

  useEffect(() => {}, [name, email]);

  return !currentUser ? (
    navigate("/")
  ) : (
    <Wrapper>
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Profile</h2>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="btn btn-block" type="submit">
            <p>Save changes</p>
          </button>
        </div>
      </form>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: 0.25px;
  width: 100%;
  background: #fff;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Profile;
