const Cart = ({props}) =>{
    return(
        <div>
            <h1>cart items</h1>
            {props && <h1>Cart Empty</h1>}
            <ul>
                {props.map((product)=>{
                    return(<li>
                        <div className='prod_img_container'>
                            <img src={product[0].prod_img} alt={product[0].prod_name} />
                        </div>
                        <div className='result-item-name'>
                            <h4>Name: {product[0].prod_name}</h4>
                            <h5>Price: {product[0].prod_price/100}</h5>
                        </div>
                        <h5>Quantity: {product.qty}</h5>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Cart;