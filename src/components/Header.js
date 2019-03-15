import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #e5e5e5;
  height: 64px;
  position: fixed;
  margin-top: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Exo 2", sans-serif;
  .linkDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .link {
    color: #0d1321;
    font-size: 18px;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="linkDiv">
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
