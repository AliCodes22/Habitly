import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/userContext";
import Input from "../../Components/Input";

const AddHabit = () => {
  //state

  const [textBody, setTextBody] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    frequency: "",
    buildOrQuit: "",
    description: "",
    email: JSON.parse(localStorage.getItem("email")),
  });

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  // event handlers

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      navigate(`/dashboard/habits/${userId}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add a new habit!</h4>
        <Input
          name="name"
          type="text"
          labelText="Habit Name"
          value={formData.name}
          required
          onChange={handleChange}
        />

        <label htmlFor="buildOrQuit">Build or Quit?</label>
        <select
          name="buildOrQuit"
          id="buildOrQuit"
          className="form-input"
          onChange={(e) => {
            setFormData((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            });
          }}
          value={formData.buildOrQuit}
          required
        >
          <option value="Build">Build</option>
          <option value="Quit">Quit</option>
        </select>

        <Input
          name="frequency"
          type="number"
          labelText="Weekly frequency"
          value={formData.frequency}
          onChange={(e) => {
            if (e.target.value < 1) {
              e.target.value = 1;
            } else if (e.target.value > 7) {
              e.target.value = 7;
            }
            setFormData((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            });
          }}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          style={{
            width: "100%",
            borderRadius: " 0.25rem",
            background: "#f8fafc",
            border: "1px solid gray",
            color: "black",
            height: "100px",
          }}
          id="description"
          name="description"
          rows={20}
          cols={5}
          onChange={(e) => {
            setFormData((prev) => {
              return {
                ...prev,
                [e.target.name]: e.target.value,
              };
            });
          }}
          required
        ></textarea>

        <button type="submit" className="btn btn-block">
          Add habit
        </button>
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
    height: 85vh;
    max-width: 400px;
    border-top: 5px solid red;
    background: #f8fafc;
    border-radius: 1.5rem;
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
    font-size: 2rem;
    margin-bottom: 2rem;
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

export default AddHabit;
