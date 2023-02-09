import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import style from "./Products.module.css";
import { deleteProduct } from "../../redux/actions/deleteProduct";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products);
  const user = sessionStorage.getItem("userEmail")

  function deleteProducts(product) {
    dispatch(deleteProduct(product));
  }
  

  if (products.length > 0) {
    return (
      <div className={style.containerPrimary}>
        <div className={style.container}>
          {products.map((product) => (
            product.stock?<Card
              name={product.name}
              img={product.img}
              size={product.size}
              cost={product.cost}
              category={product.category}
              color={product.color}
              gender={product.gender}
              season={product.season}
              stock={product.stock}
              rating={product.rating}
              id={product.id}
              key={product.id}
              deleteProduct={deleteProducts}
              email={user}
            />:null
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.containerLoading}>
        <Loading />
      </div>
    );
  }
}
