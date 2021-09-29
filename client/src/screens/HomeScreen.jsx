import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reducers/authReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const socket = useRef();

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    dispatch(logout());
  };

  return (
    <Container>
      <h1>Home Screen</h1>
      {userInfo ? (
        <>
          <Button onClick={logoutHandler}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </Container>
  );
};

export default HomeScreen;
