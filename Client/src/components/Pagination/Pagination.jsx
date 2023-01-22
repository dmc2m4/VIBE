import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";
import setCurrentPage from "../../redux/actions/setCurrentPage";

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
    setCurrentPage(pages);
  }, [dispatch, pages]);
  return (
    <div>
      {pageList(firstElement).map((e, i) => (
        <button value={i} key={i} onClick={(e) => handleClick(e.target.value)}>
          {e}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
