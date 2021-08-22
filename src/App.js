import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useCallback, createContext, useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Favorites from './Favorites';
import About from './About';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Product from './Product';


const AppContext = createContext();

const App = () => {
    const [cartItemsFromHome, setCartItemsFromHome] = useState([]);
    const [favouriteItemsFromHome, setFavouriteItemsFromHome] = useState([]);
    const[currentProduct, setCurrentProduct] = useState(null);

    const cartItemsFromHomeCallBack = useCallback((newCartItemsFromHome)=>{
        setCartItemsFromHome(newCartItemsFromHome);
    },[cartItemsFromHome])

    const favouriteItemsFromHomeCallBack = useCallback((newFavouriteItemsFromHome)=>{
        setFavouriteItemsFromHome(newFavouriteItemsFromHome);
    },[favouriteItemsFromHome])

    const currentProductCallBack = useCallback((newCurrentProduct)=>{
        setCurrentProduct(newCurrentProduct)
    },[currentProduct])
    return(<AppContext.Provider>
        <Router>
        <Header />
        <Navbar />
        <Switch>
            <Route exact path='/'><Home cartItemsFromHomeCallBack={cartItemsFromHomeCallBack} favouriteItemsFromHomeCallBack={favouriteItemsFromHomeCallBack} currentProductCallBack={currentProductCallBack}/></Route>
            <Route path ='/favorites'><Favorites props={favouriteItemsFromHome}/></Route>
            <Route exact path='/about'><About /></Route>
            <Route path='/cart'><Cart props={cartItemsFromHome}/></Route>
            <Route exact path='/contacts'><ContactUs /></Route>
            <Route path='/product'><Product props={currentProduct}/></Route>
        </Switch>
        </Router>
    </AppContext.Provider>)
}

export default App;
