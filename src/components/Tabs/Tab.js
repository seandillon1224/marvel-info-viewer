import React from "react";
import styled from "styled-components";

const TabListItem = styled.li`
  opacity: ${props => (props.active ? "1" : ".8")};
  background-color: #e5e5e5;
  color: ${props => (props.active ? "black" : "#323232")};
  width: ${props => props.width};
  list-style: none;
  font-size: 18px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.8px;
  line-height: 36px;
  font-family: "Exo-2", sans-serif;
  &:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    border-radius: 8px 0 0 0;
  }
  &:last-child {
    border-radius: 0 8px 0 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0d1321;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  /* .active {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #1c344c;
      visibility: visible;
    }
  } */
`;

const Tab = ({ label, onClick, tabArrayLength, activeTab }) => {
  return (
    <TabListItem
      //   className={activeTab === label ? "active" : null}
      width={`calc(100%/${tabArrayLength})`}
      active={activeTab === label}
      onClick={() => onClick(label)}
    >
      {label}
    </TabListItem>
  );
};

export default Tab;
