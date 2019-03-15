import React from "react";
import styled from "styled-components";
import Tabs from "../components/Tabs/Tabs";
import PaginationNav from "./PaginationNav";

const Body = styled.div`
  padding: 30px;
`;

const MainBody = () => {
  return (
    <Body>
      <Tabs>
        <div label={"Numba 1"}>
          <PaginationNav totalPages={100} />
        </div>
        <div label={"Numba 2"}>Woah babyaaa</div>
        <div label={"Numba 3"}>Woah babyasdfads</div>
        <div label={"Numba 4"}>Woah babyasdfads</div>
        <div label={"Numba 5"}>Woah babyasdfads</div>
      </Tabs>
    </Body>
  );
};

export default MainBody;
