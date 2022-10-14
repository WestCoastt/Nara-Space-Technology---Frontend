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
  width: 1920px;
  height: 70px;
  left: 0px;
  top: 0px;
  background: rgba(65, 48, 190, 0.6);

  @media screen and (max-width: 650px) {
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
  display: flex;
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 47px;
    background: inherit;
    text-align: center;
    color: #ffffff;
  }
`;

const Page01 = styled(Link)`
  position: absolute;
  width: 65px;
  height: 20px;
  top: 25px;
  left: 1714px;
  text-decoration: none;

  font-weight: ${(props) => props.fw};
  line-height: 20px;
  color: ${(props) => props.color};

  @media screen and (max-width: 650px) {
    position: initial;
    line-height: 44px;
    width: 100%;
    height: 47px;
    background: ${(props) => props.mbg};
    text-align: center;
    color: #ffffff;
  }
`;

const Page02 = styled(Link)`
  position: absolute;
  width: 65px;
  height: 20px;
  left: 1814px;
  top: 25px;
  text-decoration: none;

  font-weight: ${(props) => props.fw};
  line-height: 20px;
  color: ${(props) => props.color};

  @media screen and (max-width: 650px) {
    position: initial;
    line-height: 44px;
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

  // useEffect(() => {
  //   fetch(
  //     "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c009e0f2-420a-4d57-9675-d3bc99dfd979/user_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221012T065651Z&X-Amz-Expires=86400&X-Amz-Signature=24a6692cb3885320c628c3f310de07848e97d7d3adb8b5dfe6fdcfccf1c3246e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22user_data.json%22&x-id=GetObject"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  //  GET https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c009e0f2-420a-4d57-9675-d3bc99dfd979/user_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221012T065651Z&X-Amz-Expires=86400&X-Amz-Signature=24a6692cb3885320c628c3f310de07848e97d7d3adb8b5dfe6fdcfccf1c3246e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22user_data.json%22&x-id=GetObject 403 (Forbidden)

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
        </Nav>
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
        <Routes>
          <Route path="/" element={<Page_01 />} />
          <Route path="/page02" element={<Page_02 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
