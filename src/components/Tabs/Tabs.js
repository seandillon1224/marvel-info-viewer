import React, { Component } from "react";
import styled from "styled-components";
import Tab from "./Tab";

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border-radius: 8px;
  .tabs-list {
    padding: 0;
    margin: 0;
  }
  .tab-content {
    background-color: #e5e5e5;
  }
`;

class Tabs extends Component {
  state = {
    activeTab: this.props.children[0].props.label
  };

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    const { children } = this.props;
    return (
      <TabsContainer>
        <ol className="tabs-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={this.onClickTabItem}
                tabArrayLength={this.props.children.length}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </TabsContainer>
    );
  }
}

export default Tabs;
