const Input = ({ type, name, labelText, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
