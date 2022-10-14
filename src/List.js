import styled from "styled-components";

const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  width: 250px;
  height: ${(props) => props.hgt || "490px"};
  top: 330px;
  left: ${(props) => props.left};

  background: #ffffff;
  border-radius: 3px;

  @media screen and (max-width: 650px) {
    position: relative;
    width: ${(props) => props.mw};
    height: ${(props) => props.mh};
    top: ${(props) => props.mt};
    // left: ${(props) => props.ml};
    margin: auto;
    left: 0;
  }
`;

const ListHeader = styled.div`
  position: absolute;
  width: 250px;
  height: 93px;

  background: rgba(203, 197, 240, 0.5);
  border-radius: 3px 3px 0px 0px;
  @media screen and (max-width: 650px) {
    width: 353px;
    height: 49px;
    background: ${(props) => props.mbg};
  }
`;

const Filter = styled.div`
  position: absolute;
  z-index: 10;
  width: 82px;
  height: 29px;
  left: 20px;
  top: 20px;

  background: #ffffff;
  border-radius: 3px;
  @media screen and (max-width: 650px) {
    left: 251px;
    top: 10px;
  }
`;

const FilterBox = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  width: 72px;
  height: 19px;
`;

const FilterName = styled.div`
  width: max-content;
  margin-right: 10px;
  font-weight: 300;
  font-size: 15px;
`;

const FilterList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 82px;
  height: 60px;
  z-index: 2;
  padding: 0;
  margin: 0;
  top: 44px;
  left: 20px;
  list-style: none;
  text-align: center;
  width: 82px;
  height: 60px;
  background: #ffffff;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 5px 5px;
  @media screen and (max-width: 650px) {
    top: 38px;
    left: 251px;
  }
`;

const FilterLi = styled.li`
  &:hover {
    background: rgba(65, 48, 190, 0.4);
    color: #4130be;
    cursor: pointer;
  }
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.br || "0"};
`;

const Arrow = styled.div`
  &:hover {
    cursor: pointer;
  }
  font-weight: 300;
  font-size: 15px;
  width: 5px;
  height: 11px;
  transform: rotate(90deg);
`;

const NameBox = styled.div`
  display: flex;
  font-weight: 700;
  line-height: 19px;
  align-items: center;
  position: absolute;
  width: 163px;
  height: 19px;
  left: 20px;
  top: 64px;
  @media screen and (max-width: 650px) {
    justify-content: space-between;
    width: 177px;
    left: 20px;
    top: 15px;
    color: ${(props) => props.mclr};
    font-weight: ${(props) => props.mfw};
  }
`;

const CardList = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 93px;
  width: 250px;
  height: ${(props) => props.hgt};
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 40px;
    background: #d4d4d4;
    border-radius: 5px;
  }

  @media screen and (max-width: 650px) {
    width: 353px;
    top: 49px;
    height: ${(props) => props.mh};
  }
`;

const Card = styled.div`
  background: ${(props) => props.bg};
  padding: 10px 20px 9px 20px;
  display: ${(props) => props.dis || "flex"};
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.wth || "210px"};
  height: 19px;

  @media screen and (max-width: 650px) {
    box-sizing: border-box;
    width: ${(props) => props.mw || "353px"};
    height: 38px;
  }
`;

const CardBorder = styled.div`
  width: 210px;
  margin-left: 20px;
  border-bottom: 1px solid #ebebeb;
`;

export {
  List,
  ListHeader,
  Filter,
  FilterBox,
  FilterName,
  FilterList,
  FilterLi,
  Arrow,
  NameBox,
  CardList,
  Card,
  CardBorder,
};
