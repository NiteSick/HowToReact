import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../../routes";

const Container = styled.div`
  width: 200px;
  background-color: gray;
  height: 100vh;
`;

const LinkList = styled.ul``;
const ListItem = styled.li`
  text-align: center;
  padding: 3px 6px;
  background-color: aqua;
  &:hover {
    background-color: red;
  }

  a {
    text-decoration: none;
    width: 100%;
    display: block;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <LinkList>
        {routes.map((each, idx) => (
          <ListItem key={idx}>
            <Link to={each.path}>{each.name}</Link>
          </ListItem>
        ))}
      </LinkList>
    </Container>
  );
};

export default Navbar;
