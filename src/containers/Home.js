import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_ROUTE, VALIDATION, TIMESTAMP } from "../config/config";
import MainBody from "../components/MainBody";
const HomeDiv = styled.div`
  margin-top: 64px;
`;

class Home extends Component {
  state = {
    result: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const result = await axios(
        `${API_ROUTE}/v1/public/characters?name=spider-man${VALIDATION}`,
        {
          method: "get",
          // mode: "no-cors",
          headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
            "Content-Type": "application/json"
          },
          crossOrigin: true
        }
      );
      if (result) {
        this.setState({ result, loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { loading, result } = this.state;
    return loading ? null : (
      <HomeDiv>
        <MainBody />
        <div>{result.data.data.results[0].name}</div>
        <img
          src={`${
            result.data.data.results[0].thumbnail.path
          }/portrait_xlarge.jpg`}
        />
      </HomeDiv>
    );
  }
}

export default Home;
