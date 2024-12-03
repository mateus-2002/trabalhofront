import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  background-color: ${COLORS.white};
  padding-top: 6rem;
`;

export const LogoWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > *{
    width: 40%;
  }
`;

export const LoginTitle = styled.h1`
  font-family: "Playfair Display";
  font-weight: 400;
  font-size: 40px;
  color: ${COLORS.purple};
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  width: 30vw;
  height: 3rem;
  border: 2px solid ${COLORS.purple};
  border-radius: 10px;
  padding-left: 1rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  width: 30vw;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.iceblue};
  color: ${COLORS.white};
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.white};
    color: ${COLORS.iceblue};
    border: 2px solid ${COLORS.iceblue};
  }
`;