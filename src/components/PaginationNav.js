import React, { useState } from "react";
import styled from "styled-components";

const PageNumber = styled.li`
  color: ${props => (props.active ? "black" : "grey")};
`;
const FirstPage = styled.div`
  color: blue;
`;
const LeftArrow = styled.div`
  color: red;
`;
const RightArrow = styled.div`
  color: green;
`;
const LastPage = styled.div`
  color: yellow;
`;

const PaginationNav = ({ totalPages }) => {
  const [currentPage, setPage] = useState(1);

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / 9); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  const clicked = direction => {
    console.log("hey");
    direction === "left" && currentPage === 1
      ? setPage(pageNumbers.length)
      : direction === "left" && currentPage !== 1
      ? setPage(currentPage - 1)
      : direction === "right" && currentPage === pageNumbers.length
      ? setPage(1)
      : setPage(currentPage + 1);
  };

  const renderedPageNumbers =
    pageNumbers.length > 3 && currentPage === 1
      ? pageNumbers
          .filter(x => {
            console.log(x);
            // !huh
            return (
              pageNumbers[x === currentPage] ||
              pageNumbers[x === currentPage + 1]
            );
          })
          .map(number => {
            return (
              <PageNumber
                active={currentPage === number}
                key={number}
                id={number}
                onClick={() => setPage(number)}
              >
                {number}
              </PageNumber>
            );
          })
      : pageNumbers.length > 3
      ? pageNumbers.slice(currentPage - 2, currentPage + 1).map(number => {
          return (
            <PageNumber
              active={currentPage === number}
              key={number}
              id={number}
              onClick={() => setPage(number)}
            >
              {number}
            </PageNumber>
          );
        })
      : pageNumbers.map(number => {
          return (
            <PageNumber
              active={currentPage === number}
              key={number}
              id={number}
              onClick={() => setPage(number)}
            >
              {number}
            </PageNumber>
          );
        });
  console.log(renderedPageNumbers);
  return (
    <div>
      <div>
        <FirstPage onClick={() => setPage(1)}>hey</FirstPage>
        <LeftArrow onClick={() => clicked("left")}>Hey</LeftArrow>
      </div>
      <ul>{renderedPageNumbers}</ul>
      <div>
        <RightArrow onClick={() => clicked("right")}>Right</RightArrow>
        <LastPage onClick={() => setPage(pageNumbers.length)}>Hello</LastPage>
      </div>
    </div>
  );
};

export default PaginationNav;
