import { Link } from 'react-router-dom';
import { useState } from 'react';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
const Header = () =>{
    const [searchVal, setSearchVal] = useState();
    return(<header className='main-header'>
        <ul className='header_icon'>
            <li>
                <Link to='/favorites'><span><FavoriteRoundedIcon /></span></Link>
            </li>
            <li>
                <Link to='/cart'><span><ShoppingCartRoundedIcon /></span></Link>
            </li>
        </ul>
        <h1 className='main_heading'>Stringlish</h1>
        <form className='search_bar'>
            <input type='text' value = {searchVal} onChange={(e)=> setSearchVal(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    </header>)
}

export default Header