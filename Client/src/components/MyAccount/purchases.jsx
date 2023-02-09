import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import getPurchases from "../../redux/actions/getPurchases";
import styles from "./purchases.module.css"


const PurchasesComponent = () => {
    const purchases =  useSelector(state => state.Purchases)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = sessionStorage.getItem('userEmail')

    useEffect(()=>{
        dispatch(getPurchases(user))
    })

    function reviewButton (id) {
        navigate(`/createReview/${id}`)
    }

    return (
        <div className={styles.container}>
            {purchases?.map(p => (
                <div>
                    <img src={p.img} alt="image" />
                    <p>{p.name}</p>
                    <button onClick={() => reviewButton(p.id)}>Review</button>
                </div>
            ))}
        </div>
    )
}

export default PurchasesComponent