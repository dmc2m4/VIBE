import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllChlotes from "../../redux/actions/getAllChlotes";
import styles from "./Products.module.css";
import deleteProducts from "../../redux/actions/deleteProducts";

export default function Products() {
  const allProducts = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChlotes());
  }, [dispatch]);

  function deleteProduct(product) {
    dispatch(deleteProducts(product));
  }

  return (
    <div className={styles.container}>
      {!allProducts[0] ? (
        <Loading />
      ) : (
        allProducts.map((product) => (
          <Card
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
            deleteProduct={deleteProduct}
          />
        ))
      )}
    </div>
  );
}
