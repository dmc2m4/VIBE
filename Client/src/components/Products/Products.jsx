import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styles from "./Products.module.css";
import { deleteProduct } from "../../redux/actions/deleteProduct";
import { getAllClothes } from "../../redux/actions/getAllClothes";

export default function Products() {
  const products = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClothes());
  }, [dispatch]);

  function deleteProducts(product) {
    dispatch(deleteProduct(product));
  }

  return (
    <div className={styles.container}>
      {!products.length ? (
        <Loading />
      ) : (
        products.map((product) => (
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
            id={product.id}
            key={product.id}
            deleteProduct={deleteProducts}
          />
        ))
      )}
    </div>
  );
}
