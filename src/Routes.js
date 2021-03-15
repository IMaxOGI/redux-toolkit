import { Container, Header } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/product";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Header>
          <NavLink to="/" activeClassName="active-nav">
            Shop
          </NavLink>
        </Header>
      </Router>
    </Container>
  );
}
