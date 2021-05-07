import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  position:relative;
  z-index:2;
  background-color: ${({ theme }) => theme.palette.colorOffWhite};
`;

export const Wrapper = styled.div`
  padding: 2rem;
  position: relative;
  top: 100px;
`;
