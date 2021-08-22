const Favorites = ({props}) => {
    return(
        <div>
            <h1>cart items</h1>
            {/* {props.map((prop)=>console.log(prop[0].id, prop.qty))}; */}
            <ul>
                {props.map((product)=>{
                    return(<li>
                        <h2>{product.prod_name}</h2>
                        <h3>{product.prod_price/100}</h3>
                    </li>)
                })}
            </ul>
        </div>
    )
}
export default Favorites