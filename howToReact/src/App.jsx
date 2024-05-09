import React from "react";
import GlobalStyles from "./components/GlobalStyle";
import TitleBar from "./components/TitleBar/TitleBar";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import ContentArea from "./components/ContentArea/ContentArea";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import routes from "./routes";
import Home from "./components/Home";
import IconsBar from "./components/Items/IconsBar";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <TitleBar />
      <GlobalStyles />
      <MainContainer>
        <Navbar />
        <ContentArea />
      </MainContainer>
    </>
  );
}

export default App;
