const Cart = ({props}) =>{
    return(
        <div className='cart'>
            <h1 className='cart-items-heading'>cart items</h1>
            {props.length === 0 && <h1>Cart is Empty</h1>}
            <ul className='cart-list'>
                {props.map((product)=>{
                    return(<li className='item-in-cart'>
                        <div className='prod_img_container'>
                            <img src={product[0].prod_img} alt={product[0].prod_name} />
                        </div>
                        <div className='result-item-name'>
                            <h4>Name: {product[0].prod_name}</h4>
                            <h5>Price: {product[0].prod_price/100}</h5>
                        </div>
                        <h3>Quantity: {product.qty}</h3>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Cart;