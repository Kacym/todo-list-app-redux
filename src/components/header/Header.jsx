import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>Logo</h1>
        <LinkStyle to="/login">Log in</LinkStyle>
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: red;
  color: white;
  font-size: 25px;
  padding-bottom: 20px;
`;

const HeaderContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size: 45px;
    font-weight: bold;
    color: white;
`

export default Header;
