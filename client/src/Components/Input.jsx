const Input = ({ type, name, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        required
      />
    </div>
  );
};

export default Input;
