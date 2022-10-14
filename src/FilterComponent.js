import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetData, orderDate, filterName } from "./store";
import {
  Filter,
  FilterBox,
  FilterName,
  FilterList,
  FilterLi,
  Arrow,
} from "./List";

export default function FilterComponent() {
  const [dropdown, setDropdown] = useState(false);

  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const filter = (a) => {
    dispatch(filterName(a));
  };

  const reset = (a) => {
    dispatch(resetData(a));
  };

  const order = (a) => {
    dispatch(orderDate(a));
  };

  const descending = () => {
    const arr = [...state.user];
    const ordered = arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    reset();
    order(ordered);
  };

  const ascending = () => {
    const arr = [...state.user];
    const ordered = arr.sort((a, b) => new Date(a.date) - new Date(b.date));
    reset();
    order(ordered);
  };

  return (
    <>
      <Filter>
        <FilterBox>
          <FilterName>{state.filtered}</FilterName>
          <Arrow onClick={() => setDropdown((dropdown) => !dropdown)}>
            &gt;
          </Arrow>
        </FilterBox>
      </Filter>
      {dropdown && (
        <FilterList>
          <FilterLi
            onClick={() =>
              setDropdown(false) & filter("오름차 순") & ascending()
            }
          >
            오름차 순
          </FilterLi>
          <FilterLi
            onClick={() =>
              setDropdown(false) & filter("내림차 순") & descending()
            }
            br="0px 0px 5px 5px"
          >
            내림차 순
          </FilterLi>
        </FilterList>
      )}
    </>
  );
}
