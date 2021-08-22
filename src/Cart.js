const Cart = ({props}) =>{
    return(
        <div>
            <h1>cart items</h1>
            {/* {props.map((prop)=>console.log(prop[0].id, prop.qty))}; */}
            <ul>
                {props.map((product)=>{
                    return(<li>
                        <h2>{product[0].prod_name}</h2>
                        <h3>{product[0].prod_price/100}</h3>
                        <h2>{product.qty}</h2>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Cart;