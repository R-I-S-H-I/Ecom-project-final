import { useState, useContext, createContext, useEffect } from 'react';
import StarIcon from '@material-ui/icons/Star';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import data from './data';
const Products = () =>{
    //state variables ----------------------------------------------------------
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([]);
    //state variables ----------------------------------------------------------
    //--------------------------------------------------------------------------
    //addToCart function -------------------------------------------------------
    const addToCart = (id) =>{
        const itemExists = products.find((product)=>product.id === id);
        if(itemExists){
            setCart(cart.map((product)=>product.id === id ? {...itemExists, quantity: itemExists.quantity+1} : product))
        }
        else{
        const newProduct = data.filter((product)=> product.id === id);
        setCart([...cart, {...newProduct, quantity: 1}]);
        }

    }
    //addToCart function -------------------------------------------------------
    //--------------------------------------------------------------------------
    //addTofavorites function --------------------------------------------------
    //..........................................................................
    //also to remove a favorite from the favorites..............................
    const addToFavorite = (id) =>{
        const newFav = products.filter((product)=> product.id === id)[0];
        if(favorite.includes(newFav)){
            setFavorite(favorite.filter((favProd)=> favProd.id !== newFav.id));
            document.getElementById(`favorite_btn${id}`).style.backgroundColor = 'inherit';
            console.log(favorite);
        }
        else{
            setFavorite([...favorite, newFav]);
            document.getElementById(`favorite_btn${id}`).style.backgroundColor = 'red';
            console.log(favorite);
        }
    }
    //addTofavorites function --------------------------------------------------
    return(<div>
        <h2>Products</h2>
        <ul>
            {products.map((product)=>{
                const {id, prod_name, prod_price, rating} = product;
                return(<li key={id}>
                    <h4>Name: {prod_name}</h4>
                    <h5>Price: {prod_price/100}</h5>
                    {rating==='four and above' && <div>Rating: 4<StarIcon/></div>}
                    {rating==='three and above' && <div>Rating: 3<StarIcon/></div>}
                    {rating==='two and above' && <div>Rating: 2<StarIcon/></div>}
                    {rating==='one and above' && <div>Rating: 1<StarIcon/></div>}
                    <button type="button" onClick={()=> addToCart(id)}><AddShoppingCartIcon /></button>
                    <button type="button" id={`favorite_btn${id}`} onClick={()=>addToFavorite(id)}><FavoriteIcon /></button>
                </li>);
            })}
        </ul>
    </div>);
}

export default Products