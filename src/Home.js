import { useState, useContext, createContext, useEffect, useCallback } from 'react';
import StarIcon from '@material-ui/icons/Star';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import data from './data';

const HomeContext = createContext();
const ProductsContext = createContext(); //context for Products component to access addToCart() method, cart array and favourite array.


const Home = () =>{
    const [filteredProducts_filters, setFilteredProducts_filters] = useState(data);
    const filteredProductsCallback = useCallback((newFilteredItems)=>{
        setFilteredProducts_filters(newFilteredItems)
    },[])
    return(
        <HomeContext.Provider value = {filteredProducts_filters}>
            <section>
                <Filters filterCallback = {filteredProductsCallback}/>
            </section>
            <section>
                <Products />
            </section>
        </HomeContext.Provider>
    );
}

const Filters = ({filterCallback}) =>{
    const [typeOfGuitar, setTypeOfGuitar] = useState('all');
    const [rating, setRating] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(data);
    const [sortVal, setSortVal] = useState('');

    const onChangeType = (e) =>{
        setTypeOfGuitar(e.target.value);
    }
    const onChangeRating = (e) =>{
        setRating(e.target.value);
    }
    const sortItems = (e) =>{
        setSortVal(e.target.value);
        console.log(sortVal);
    }

    useEffect(()=>{
        if(typeOfGuitar === 'acoustic'){
            const newFilteredProducts = data.filter((product)=>product.type === 'acoustic');
            setFilteredProducts(newFilteredProducts);
        }
        else if(typeOfGuitar === 'electric'){
            const newFilteredProducts = data.filter((product)=>product.type === 'electric');
            setFilteredProducts(newFilteredProducts);
        }
        else if(typeOfGuitar === 'all'){
            setFilteredProducts(data);
        }
    },[typeOfGuitar]);
    useEffect(()=>{
        if(rating === 'four and above'){
            const newFilteredProducts = data.filter((product)=>product.rating === 'four and above');
            setFilteredProducts(newFilteredProducts);
        }
        else if(rating === 'three and above'){
            const newFilteredProducts = data.filter((product)=>product.rating === 'three and above');
            setFilteredProducts(newFilteredProducts);
        }
        else if(rating === 'two and above'){
            const newFilteredProducts = data.filter((product)=>product.rating === 'two and above');
            setFilteredProducts(newFilteredProducts);
        }
        else if(rating === 'one and above'){
            const newFilteredProducts = data.filter((product)=>product.rating === 'one and above');
            setFilteredProducts(newFilteredProducts);
        }
    },[rating])
    useEffect(()=>{
        if(sortVal === 'lth'){
            const newFilteredProducts = filteredProducts.sort((a,b)=>{
                return a.prod_price - b.prod_price;
            })
            setFilteredProducts(newFilteredProducts);
            console.log(newFilteredProducts);
            
        }
        else if(sortVal === 'htl'){
            const newFilteredProducts = filteredProducts.sort((a,b)=>{
                return b.prod_price - a.prod_price;
            })
            console.log(newFilteredProducts);
            setFilteredProducts(newFilteredProducts); 
        }
        setFilteredProducts(filteredProducts);
    },[sortVal, filteredProducts])
    filterCallback(filteredProducts);
    return(
        <div>
            <form>
                <h3>Filters</h3>
                <fieldset>
                    <label htmlFor='sort'>Sort: </label>
                    <select name='sort' id='sort' onChange={(e)=>sortItems(e)}>
                        <option value='none'>None</option>
                        <option value='lth'>Price: Low to High</option>
                        <option value='htl'>Price: High to Low</option>
                    </select>
                </fieldset>
                <div>
                    <fieldset>
                        <legend>Type</legend>
                        <ul>
                            <li>
                                <input type='radio' name='type' value='all' id='all' onChange={(e) => onChangeType(e)}/>
                                <label htmlFor='all'>All</label>
                            </li>
                            <li>
                                <input type='radio' name='type' value='acoustic' id='acoustic' onChange={(e) => onChangeType(e)}/>
                                <label htmlFor='acoustic'>Acoustic</label>
                            </li>
                            <li>
                                <input type='radio' name='type' value='electric' id='electric' onChange={(e) => onChangeType(e)}/>
                                <label htmlFor='electric'>Electric</label>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Ratings</legend>
                        <ul>
                            <li>
                                <input type="radio" name="rating" value="four and above" id="four and above" onChange={(e)=>onChangeRating(e)} />
                                <label htmlFor='four and above'>4 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="three and above" id="three and above" onChange={(e)=>onChangeRating(e)} />
                                <label htmlFor='three and above'>3 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="two and above" id="two and above" onChange={(e)=>onChangeRating(e)} />
                                <label htmlFor='two and above'>2 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="one and above" id="one and above" onChange={(e)=>onChangeRating(e)} />
                                <label htmlFor='one and above'>1 <StarIcon/>'s and above</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </form>
        </div>
    );
}

const Products = () =>{
    const filteredProducts_filters = useContext(HomeContext);
    //state variables ----------------------------------------------------------
    const [products, setProducts] = useState(filteredProducts_filters);
    useEffect(()=>{
        setProducts(filteredProducts_filters);
    },[filteredProducts_filters])
    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([]);
    //state variables ----------------------------------------------------------
    //--------------------------------------------------------------------------
    //addToCart function -------------------------------------------------------
    const addToCart = (id) =>{
        const itemExists = cart.find((product)=>product[0].id === id);
        if(itemExists){
            setCart(cart.filter((product)=>product[0].id === id ? {...itemExists, qty: itemExists.qty++} : product))
        }
        else{
        const newProduct = products.filter((product)=> product.id === id);
        setCart([...cart, {...newProduct, qty: 1}]);
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
        }
        else{
            setFavorite([...favorite, newFav]);
            document.getElementById(`favorite_btn${id}`).style.backgroundColor = 'red';
        }
    }
    //addTofavorites function --------------------------------------------------
    return(<ProductsContext.Provider value={{addToCart, cart, favorite}}>
        <button type="button" onClick={()=>console.log(cart)}>Click to print cart items</button>
        <button type="button" onClick={()=>console.log(favorite)}>Click to print favorites</button>
        <h2>Products</h2>
        <ul>
            {products.map((product)=>{
                const {id, prod_name, prod_price, rating, type} = product;
                return(<li key={id}>
                    <h4>Name: {prod_name}</h4>
                    <h5>Price: {prod_price/100}</h5>
                    {rating==='four and above' && <div>Rating: 4<StarIcon/></div>}
                    {rating==='three and above' && <div>Rating: 3<StarIcon/></div>}
                    {rating==='two and above' && <div>Rating: 2<StarIcon/></div>}
                    {rating==='one and above' && <div>Rating: 1<StarIcon/></div>}
                    <h4>Type: {type}</h4>
                    <button type="button" id={`addToCart_btn${id}`}onClick={()=> addToCart(id)}><AddShoppingCartIcon /></button>
                    <button type="button" id={`favorite_btn${id}`} onClick={()=>addToFavorite(id)}><FavoriteIcon /></button>
                </li>);
            })}
        </ul>
    </ProductsContext.Provider>);
}

export default Home