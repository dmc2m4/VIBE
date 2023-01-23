import { useState, React } from "react";
import { useDispatch } from "react-redux";
import createProdcut from "../../redux/actions/createProduct";
import style from './FormNewProduct.module.css'


const FormNewProduct = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const [newProduct, setNewProduct] = useState({
        name: "",
        img: "",
        size: "",
        color: "",
        category: "",
        gender: "",
        cost: 0,
        rating: 0,
        season: "",
        stock: 0,
    });

    function handleChange(e) {
        setError(
            validate({
                ...newProduct,
                [e.target.name]: e.target.value,
            })
        );
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    }

    function validate(input) {
        if (!input.name) error.name = "Falta el nombre del producto";
        return error
    }

    const handleChange2 = (e) => {
        setNewProduct({
            ...newProduct,
            season: e.target.value
        })
    }

    const handleChange3 = (e) => {
        setNewProduct({
            ...newProduct,
            category: e.target.value
        })
    }

    const handleChange4 = (e) => {
        setNewProduct({
            ...newProduct,
            gender: e.target.value
        })
    }

    const handleChange5 = (e) => {
        setNewProduct({
            ...newProduct,
            rating: parseInt(e.target.value)
        })
    }

    console.log(newProduct);

    function handleSubmit() {
        if (!newProduct.name || !newProduct.img || !newProduct.size || !newProduct.color || !newProduct.category || !newProduct.gender || !newProduct.cost || !newProduct.rating || !newProduct.season || !newProduct.stock) {
            return alert("Por favor completar todos los campos");
        }
        dispatch(createProdcut(newProduct));
        console.log(newProduct);
        alert("Producto creado correctamente");
    }

    return (
        <div className={style.containerForm}>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Product name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="product name"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>image</label>
                <input
                    type="text"
                    id="img"
                    name="img"
                    placeholder="image"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>Size</label>
                <input
                    type="text"
                    id="size"
                    name="size"
                    placeholder="size"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>Color</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    placeholder="color"
                    onChange={handleChange}
                />
                </div>
                <div>
                    <select onChange={handleChange2} name="season">
                        <option >Select season</option>
                        <option value="all seasons">All seasons</option>
                        <option value="summer">Summer</option>
                        <option value="spring">Spring</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                    </select>
                </div>
                <div>
                    <select onChange={handleChange3} name="category" >
                        <option >Select category</option>
                        <option value="shirts">shirts</option>
                        <option value="t-shirts">t-shirts</option>
                        <option value="pants">pants</option>
                        <option value="shoes">shoes</option>
                        <option value="shorts">shorts</option>
                        <option value="jackets">jackets</option>
                        <option value="sweatshirts">sweatshirts</option>
                    </select>
                </div>
                <div>
                    <select onChange={handleChange4} name="gender">
                        <option >Select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div>
                <label>Cost</label>
                <input
                    type="number"
                    id="cost"
                    name="cost"
                    placeholder="cost"
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>Rating</label>
                <div>
            
    <div>
      <input type="radio" name="rating" id="rating1"  value="1" onChange={handleChange5}/>
      <label >1</label>
    </div>
    <div>
      <input type="radio" id="rating2"  value="2" onChange={handleChange5}/>
      <label >2</label>
    </div>
    <div>
      <input type="radio" id="rating3"  value="3" onChange={handleChange5}/>
      <label>3</label>
    </div>
     <div>
      <input type="radio" id="rating4"  value="4" onChange={handleChange5}/>
      <label >4</label>
    </div>
     <div>
      <input type="radio" id="rating5"  value="5" onChange={handleChange5}/>
      <label >5</label>
    </div>

                </div>
                </div>
                <div>
                <label>Stock</label>
                <input
                    type="number"
                    id="stock"
                    name="stock"
                    placeholder="stock"
                    onChange={handleChange}
                />
                </div>
                <button type='submit'>Create Product</button> 
            </form>
        </div>
    );
};

export default FormNewProduct;
