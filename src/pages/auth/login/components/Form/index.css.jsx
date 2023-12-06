import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 4rem;
  background-color: #f0f8ff;
  border-radius: 50px;
  border: 1px solid black;
  transition: box-shadow 0.7s ease; /* Add a transition for smooth effect */

  &:hover {
    box-shadow: 0px 0px 10px 10px lightblue; /* Apply box shadow on hover */
  }
`;
