import Filters from "./Filters";
import Products from "./Products";
const Home = () =>{
    return(
        <main>
            <section>
                <Filters />
            </section>
            <section>
                <Products />
            </section>
        </main>
    );
}

export default Home