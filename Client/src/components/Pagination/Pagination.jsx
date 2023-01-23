import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPage from "../../redux/actions/getPage";
import setCurrentPage from "../../redux/actions/setCurrentPage";

const Pagination = () => {
  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.Filters);
  const page = useSelector((state) => state.Page);

  function handlePrev() {
    if (page){
      dispatch(setCurrentPage(page - 5));
    }else {
      return null;
    }
  }

  function handleNext() {
    if (!page){
      dispatch(setCurrentPage(page + 5));
    }else {
      return null;
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
