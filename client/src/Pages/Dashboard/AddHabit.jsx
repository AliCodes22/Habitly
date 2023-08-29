import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/userContext";
import Input from "../../Components/Input";

const AddHabit = () => {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    breakOrQuit: "",
    frequency: "",

    value,
  });

  const handleChange = (e) => {
    if (e.target.value <= 1) {
      e.target.value = 1;
    } else if (e.target.value >= 7) {
      e.target.value = 7;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Add a new habit!</h4>
        <Input name="name" type="text" labelText="Habit Name" />

        <label htmlFor="break-or-quit">Break or Quit?</label>
        <select
          name="break-or-quit"
          id="break-or-quit"
          className="form-input"
          onChange={handleSelect}
          value={value}
        >
          <option value="break">Break</option>
          <option value="quit">Quit</option>
        </select>

        <Input
          name="frequency"
          type="number"
          labelText="Weekly frequency"
          onChange={handleChange}
        />

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
    height: 75vh;
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
