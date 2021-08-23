const Favorites = ({props}) => {
    return(
        <div className='favorites'>
            <h1>Favourite items</h1>
            {props.length===0 && <h1>No Favourite Items</h1>}
            <ul className='favourites-list'>
                {props.map((product)=>{
                    return(<li className='favourites-list-item'>
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