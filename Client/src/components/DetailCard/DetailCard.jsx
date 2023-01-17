import React from "react";

const DetailCard = () => {
  return (
    <div>
      <button>Back</button>
      <button>Favorite</button>
      <button>Add car</button>
      <img src='' alt='' />
      <h4>Color:</h4>
      <h4>Size:</h4>
      <h4>Price:</h4>
      <h4>Type:</h4>
      <h4>Season:</h4>
      <h4>Gender:</h4>
      <h4>Material:</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        asperiores illum ea rerum rem non quia, dolor hic dolorem nemo aut
        deserunt odio enim dicta amet iusto vero. Aliquam, laudantium.
      </p>

      <textarea name="comments" id="comments" cols="100" rows="10"></textarea>
      <button>Add comment</button>
    </div>
  );
};

export default DetailCard;
