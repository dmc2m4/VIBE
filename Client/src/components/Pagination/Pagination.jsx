import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";
import setCurrentPage from "../../redux/actions/setCurrentPage";

const Pagination = () => {
  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.Filters);
  const page = useSelector((state) => state.Page);
  function handlePrev() {
    dispatch(setCurrentPage(page - 5));
  }
  function handleNext() {
    dispatch(setCurrentPage(page + 5));
  }
  useEffect(() => {
    dispatch(getPage(page, filtred));
  }, [dispatch, page, filtred]);
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
