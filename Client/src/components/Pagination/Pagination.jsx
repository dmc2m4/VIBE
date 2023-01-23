import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";
import setCurrentPage from "../../redux/actions/setCurrentPage";
import style from './Pagination.module.css'

const Pagination = () => {
  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.Filters);
  const page = useSelector((state) => state.Page);
  const maxNum = useSelector((state) => state.Num);
  function handlePrev() {
    if (page - 5 >= 0) {
      dispatch(setCurrentPage(page - 5));
    }
  }

  function handleNext() {
    if (page + 5 < maxNum) {
      dispatch(setCurrentPage(page + 5));
    }
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
