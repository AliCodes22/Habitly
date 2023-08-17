import styled from "styled-components";

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <StyledBtn>Styled button</StyledBtn>
    </div>
  );
};

const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

export default Landing;
