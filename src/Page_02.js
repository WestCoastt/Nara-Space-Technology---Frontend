import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterComponent from "./FilterComponent";
import styled from "styled-components";
import { List, ListHeader, NameBox, CardList, Card, CardBorder } from "./List";
import { selectUser } from "./store";

const CardOuter = styled.div`
  background: ${(props) => props.bg};
  &:hover {
    cursor: pointer;
  }
`;

const Profile = styled.div`
  position: absolute;
  width: 352px;
  height: 425px;
  left: 919px;
  top: 330px;
  background: #ffffff;
  border-radius: 3px;

  @media screen and (max-width: 650px) {
    position: relative;
    margin: auto;
    left: 0;
    top: 20px;
  }
`;

const ProfileBG = styled.div`
  position: absolute;
  width: 352px;
  height: 172px;

  background: rgba(203, 197, 240, 0.5);
  border-radius: 3px 3px 0px 0px;
`;

const Picture = styled.div`
  position: absolute;
  left: 86px;
  top: 40px;
  width: 180px;
  height: 180px;
  background: #ffffff url(${(props) => props.img});
  border-radius: 100px;
`;

const UserInfo = styled.div`
  position: absolute;
  left: 25px;
  top: 260px;
  width: 302px;
  height: 97px;
  font-size: 15px;
`;

const Name = styled.div`
  height: 19px;
  margin-bottom: 10px;
`;
const Birth = styled.div`
  height: 19px;
  margin-bottom: 10px;
`;
const Comment = styled.div`
  height: 19px;
`;

const Title = styled.span`
  font-weight: 700;
`;

const Border = styled.div`
  width: 302px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
`;

function Page_02() {
  const [checked, setChecked] = useState([]);

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const select = (a) => {
    dispatch(selectUser(a));
  };

  useEffect(() => {
    const res = state.user.filter((a) => {
      if (a.checked) return a;
    });
    setChecked(res);
  }, [state.user]);

  return (
    <div className="main">
      <Profile>
        <ProfileBG></ProfileBG>
        <Picture />
        <Picture
          img={
            state.selected
              ? state.selected.image === ""
                ? "/assets/default.png"
                : "/assets/" + state.selected.image
              : null
          }
        />
        <UserInfo>
          <Name>
            <Title>이름</Title>
            <span style={{ marginLeft: "63px" }}>
              {state.selected ? state.selected.name : null}
            </span>
          </Name>
          <Border />
          <Birth>
            <Title>생년월일</Title>
            <span style={{ width: "63px", marginLeft: "37px" }}>
              {state.selected.date
                ? state.selected.date.substring(0, 10).replace(/-/g, ".")
                : null}
            </span>
          </Birth>
          <Border />
          <Comment>
            <Title>한마디</Title>
            <span style={{ marginLeft: "50px" }}>
              {state.selected ? state.selected.comment : null}
            </span>
          </Comment>
        </UserInfo>
      </Profile>

      <List left="649px" hgt="425px" mw="353px" mt="0" ml="20px" mh="254px">
        <ListHeader mbg="rgba(65, 48, 190, 0.6)">
          <FilterComponent />
          <NameBox mclr="#ffffff" mfw="500">
            <p style={{ marginRight: "83px" }}>이름</p>
            <p>생년월일</p>
          </NameBox>
        </ListHeader>
        <CardList hgt="304px" mh="190px">
          {checked.map((a, i) => (
            <CardOuter
              key={a.comment}
              bg={
                state.selected &&
                state.selected.name === a.name &&
                "rgba(65, 48, 190, 0.3)"
              }
              onClick={() => {
                select(a);
              }}
            >
              <Card wth="173px" mw="226px">
                <span>{a.name}</span>
                <span style={{ width: "63px" }}>
                  {a.date.substring(0, 10).replace(/-/g, ".")}
                </span>
              </Card>
              <CardBorder></CardBorder>
            </CardOuter>
          ))}
        </CardList>
      </List>
    </div>
  );
}

export default Page_02;
