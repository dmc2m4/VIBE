import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";

const Pagination = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState(0);
  let allProducts = useSelector((state) => state.Filters);
  let firstElement = Math.ceil(allProducts.length / 5);
  function pageList(num) {
    const arrPages = [];
    for (let i = num; i > 0; i--) {
      arrPages.unshift(i);
    }
    return arrPages;
  }
  function handleClick(e) {
    setPages(e * 5);
  }
  useEffect(() => {
    dispatch(getPage(pages));
  }, [dispatch, pages]);
  return (
    <div>
      {pageList(firstElement).map((e, i) => {
        <button key={i} value={i} onClick={(e) => handleClick(e.target.value)}>
          {e}
        </button>;
      })}
    </div>
  );
};

export default Pagination;
