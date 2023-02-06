import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";
import setCurrentPage from "../../redux/actions/setCurrentPage";
import style from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Page);
  const filtred = useSelector((state) => state.Filters);
  const maxNum = useSelector((state) => state.Num);
  function handlePrev() {
    if (page - 5 >= 0) {
      dispatch(setCurrentPage(page - 5));
      // dispatch(getPage(page, filtred));
    }
  }

  function handleNext() {
    if (page + 5 < maxNum) {
      dispatch(setCurrentPage(page + 5));
      // dispatch(getPage(page, filtred));
    }
  }
  useEffect(() => {
    dispatch(getPage(page, filtred));
  }, [dispatch, page, filtred]);
  return (
    <div className={style.container}>
      <button
        onClick={handlePrev}
        className={style.buttonPa}
        style={page === 0 ? { visibility: "hidden" } : null}
      >
        Prev
      </button>
      <div className={style.pageInfo}>
        <div>{Math.ceil(page / 5) + 1}</div>
        <span>of</span>
        <div>{Math.ceil(maxNum / 5)}</div>
      </div>
      <button onClick={handleNext} className={style.buttonPa}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
