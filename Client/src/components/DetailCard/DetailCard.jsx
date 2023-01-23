import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import createDetail from "../../redux/actions/createDetail";

const DetailCard = () => {
  const detail = useSelector((state) => state.Detail);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to='/home'>
<<<<<<< HEAD
=======
        {" "}
>>>>>>> 73a19dde628571be3671e2f9e4dbfecdd22f2e21
        <button>Back</button>
      </Link>
      <button>Favorite</button>
      <button>Add car</button>
      <h4>{detail.name}</h4>
      <img src={detail.img} alt='Image product' />
      <p>Size: {detail.size}</p>
      <p>Color: {detail.color}</p>
      <p>Category: {detail.category}</p>
      <p>Gender: {detail.gender}</p>
      <p>Cost: {detail.cost} USD</p>
      <p>Rating: {detail.rating} ⭐ </p>
      <p>Season: {detail.season}</p>
      <p>Stock: {detail.stock}</p>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        asperiores illum ea rerum rem non quia, dolor hic dolorem nemo aut
        deserunt odio enim dicta amet iusto vero. Aliquam, laudantium.
      </p> */}
      {/* <textarea name="comments" id="comments" cols="100" rows="10"></textarea>
      <button>Add comment</button> */}
    </div>
  );
};

export default DetailCard;
