import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import putComment from "../../../redux/actions/putComment";

const ResponseForm = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    response: "",
    id: props.id,
  });


  const user = useSelector((state) => state.User);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(putComment(input));
  };

  return (
    <div>
      {user?.isAdmin ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="response"
              id="response"
              placeholder="make your response"
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <button type="submit">Send response</button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResponseForm;
