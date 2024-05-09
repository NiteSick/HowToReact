import React from "react";
import styled from "styled-components";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../../routes";
import PrivateComponent from "../PrivateComponent";
import Home from "../Home";
import IconsBar from "../Items/IconsBar";

const Container = styled.div`
  flex: 1;
  background-color: lightgray;
  height: 100vh;
`;

const a = [
  { path: "/", component: Home, name: "Home" },
  { path: "/iconBar", component: IconsBar, name: "Icon Bar" },
];
const ContentArea = () => {
  return (
    <>
      <Container>
        <Switch>
          {a.map((route, idx) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={idx}
            />
          ))}
        </Switch>
      </Container>
    </>
  );
};

export default ContentArea;
