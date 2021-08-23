const Favorites = ({props}) => {
    return(
        <div>
            <h1>Favourite items</h1>
            {props && <h1>No Favourites</h1>}
            <ul>
                {props.map((product)=>{
                    return(<li>
                        <div className='prod_img_container'>
                            <img src={product.prod_img} alt={product.prod_name} />
                        </div>
                        <div className='result-item-name'>
                            <h4>Name: {product.prod_name}</h4>
                        <h5>Price: {product.prod_price/100}</h5>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}
export default Favorites