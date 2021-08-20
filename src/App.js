import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Favorites from './Favorites';
import About from './About';
import Cart from './Cart';
import ContactUs from './ContactUs';
import Footer from './Footer';

const App = () => {
    return(<>
        <Router>
        <Header />
        <Navbar />
        <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path ='/favorites'><Favorites /></Route>
            <Route exact path='/about'><About /></Route>
            <Route path='/cart'><Cart /></Route>
            <Route exact path='/contacts'><ContactUs /></Route>
        </Switch>
        <Footer />
        </Router>
    </>)
}

export default App;
