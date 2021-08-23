import data from "./data"
const Product =() =>{
    const prodIdFromURL = parseInt(window.location.href.split('/').pop());
    const prod = data.filter((product)=> product.id === prodIdFromURL);
    return (
        <div className='theProduct'>
            <div className='prod_img_container'>
                <img src={prod[0].prod_img} alt={prod[0].prod_name} />
            </div>
            <div className='result-item-name'>
                <h4>Name: {prod[0].prod_name}</h4>
                <h5>Price: {prod[0].prod_price/100}</h5>
            </div>
            <div>
                <p className='productDesc'>
                    {prod[0].desc}
                </p>
            </div>
        </div>
    )
}
export default Product