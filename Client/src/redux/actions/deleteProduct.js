export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const deleteProducts = (product) => {
    return async function (dispatch){
        try{
            await axios.delete (`http://localhost:3001/product/delete/${product}`); 
            dispatch({
                type: DELETE_PRODUCT,
                payload: product
            })
        }catch(error){
            alert('the activity could not be deleted')
        }  
    }
}