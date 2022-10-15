import "./App.css";
import logo from "./logo.svg";
import styled from "styled-components";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Page_01 from "./Page_01";
import Page_02 from "./Page_02";
import { useDispatch } from "react-redux";
import { addData } from "./store";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  background: rgba(65, 48, 190, 0.6);

  @media screen and (max-width: 650px) {
    min-width: 393px;
    width: 100%;
    height: 108px;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 2.08%;
  right: 88.83%;
  top: 1.85%;
  bottom: 95.43%;
  @media screen and (max-width: 650px) {
    left: 21px;
    top: 60px;
  }
`;

const PageBox = styled.div`
  position: relative;
  width: 200px;
  height: 70px;
  margin: auto;
  margin-right: 20px;
  display: flex;
  @media screen and (max-width: 650px) {
    top: 108px;
    width: 100%;
    height: 47px;
    text-align: center;
    color: #ffffff;
  }
`;

const Page01 = styled(Link)`
  width: 65px;
  height: 20px;
  margin-top: 25px;
  margin-right: 35px;
  text-decoration: none;

  font-weight: ${(props) => props.fw};
  line-height: 20px;
  color: ${(props) => props.color};

  @media screen and (max-width: 650px) {
    position: initial;
    line-height: 44px;
    margin-right: 0;
    margin-top: 0;
    width: 100%;
    height: 47px;
    background: ${(props) => props.mbg};
    text-align: center;
    color: #ffffff;
  }
`;

const Page02 = styled(Link)`
  width: 65px;
  height: 20px;
  margin-top: 25px;
  text-decoration: none;

  font-weight: ${(props) => props.fw};
  line-height: 20px;
  color: ${(props) => props.color};

  @media screen and (max-width: 650px) {
    position: initial;
    line-height: 44px;
    margin-top: 0;
    width: 100%;
    height: 47px;
    background: ${(props) => props.mbg};
    text-align: center;
    color: #ffffff;
  }
`;

function App() {
  const location = useLocation();

  const dispatch = useDispatch();
  const add = (a) => {
    dispatch(addData(a));
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/user_data.json");
      const json = await res.json();
      const orderedDate = json.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      add(orderedDate);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        <Nav>
          <Logo src={logo} alt="logo"></Logo>
          <PageBox>
            <Page01
              to="/"
              color={location.pathname === "/" ? "#4130be" : "#ffffff"}
              fw={location.pathname === "/" ? "700" : "400"}
              mbg={
                location.pathname === "/" ? "#4130be" : "rgba(65, 48, 190, 0.2)"
              }
            >
              PAGE 01
            </Page01>
            <Page02
              to="/page02"
              color={location.pathname === "/page02" ? "#4130be" : "#ffffff"}
              fw={location.pathname === "/page02" ? "700" : "400"}
              mbg={
                location.pathname === "/page02"
                  ? "#4130be"
                  : "rgba(65, 48, 190, 0.2)"
              }
            >
              PAGE 02
            </Page02>
          </PageBox>
        </Nav>
        <Routes>
          <Route path="/" element={<Page_01 />} />
          <Route path="/page02" element={<Page_02 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
