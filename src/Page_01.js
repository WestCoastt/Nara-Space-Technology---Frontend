import arrow from "./arrow.svg";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "./store";
import FilterComponent from "./FilterComponent";
import { List, ListHeader, NameBox, CardList, Card, CardBorder } from "./List";

const NameBirth = styled.div`
  width: 152px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (max-width: 650px) {
    width: 186px;
  }
`;

const ListBox = styled.div`
  display: flex;
  margin: auto;
  margin-top: 260px;
  width: 650px;
  height: 490px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 393px;
    height: 647px;
    margin-top: 67px;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 250px;
  text-align: right;
  height: 38px;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    width: 353px;
  }
`;

const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  margin: 0px;
  accent-color: #4130be;
  margin-top: 13px;
  margin-right: 20px;
`;

const ArrowImg = styled.img`
  position: relative;
  width: 56px;
  height: 37px;
  margin: auto;
  @media screen and (max-width: 650px) {
    position: relative;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }
`;

const Save = styled.button`
  &:hover {
    cursor: pointer;
  }
  font-family: SUIT-Variable;
  font-size: 15px;
  border: none;
  position: absolute;
  top: 430px;
  left: 20px;
  width: 210px;
  height: 35px;
  background: #4130be;
  border-radius: 3px;
  @media screen and (max-width: 650px) {
    top: 254px;
    width: 313px;
  }
`;

function Page_01() {
  const [checked, setChecked] = useState([]);

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const change = (a) => {
    dispatch(changeData(a));
  };

  useEffect(() => {
    const res = state.user.filter((a) => {
      if (a.checked) return a;
    });
    setChecked(res);
  }, [state.user]);

  return (
    <div className="main">
      <ListBox>
        <List left="638px" mw="353px" ml="20px" mh="293px">
          <ListHeader>
            <FilterComponent />
            <NameBox>
              <p style={{ marginRight: "63px" }}>??????</p>
              <p>????????????</p>
            </NameBox>
          </ListHeader>
          <CardList hgt="397px" mh="244px">
            {state &&
              state.user.map((a, i) => (
                <>
                  <div
                    key={a.name}
                    style={{
                      background: a.checked && "rgba(65, 48, 190, 0.3)",
                      color: a.checked && "#4130BE",
                    }}
                  >
                    <Label for={a.name}>
                      <NameBirth>
                        <span>{a.name}</span>
                        <span style={{ width: "63px" }}>
                          {a.date.substring(0, 10).replace(/-/g, ".")}
                        </span>
                      </NameBirth>
                      <CheckBox
                        id={a.name}
                        type="checkbox"
                        defaultChecked={a.checked}
                        onChange={() => {
                          change(a.name);
                        }}
                      />
                    </Label>
                  </div>
                  <CardBorder></CardBorder>
                </>
              ))}
          </CardList>
        </List>
        <ArrowImg src={arrow} alt="arrow" />

        <List left="1033px" mw="353px" ml="20px" mh="314px">
          <ListHeader>
            <FilterComponent />
            <NameBox>
              <p style={{ marginRight: "83px" }}>??????</p>
              <p>????????????</p>
            </NameBox>
          </ListHeader>
          <CardList hgt="304px" mh="190px">
            {checked.map((a, i) => (
              <div key={a.comment}>
                <Card wth="173px" mw="226px">
                  <span>{a.name}</span>
                  <span style={{ width: "63px" }}>
                    {a.date.substring(0, 10).replace(/-/g, ".")}
                  </span>
                </Card>
                <CardBorder></CardBorder>
              </div>
            ))}
          </CardList>
          <Save>
            <p
              style={{ margin: "8px 0", color: "#FFFFFF" }}
              // onClick={() => {
              // }}
            >
              ????????????
            </p>
          </Save>
        </List>
      </ListBox>
    </div>
  );
}

export default Page_01;
