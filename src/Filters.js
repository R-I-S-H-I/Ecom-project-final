import { useState } from "react";
import StarIcon from '@material-ui/icons/Star';
const Filters = () =>{
    const [typeOfGuitar, setTypeOfGuitar] = useState('all');
    const [rating, setRating] = useState('');
    return(
        <div>
            <form>
                <h3>Filters</h3>
                <fieldset>
                    <label htmlFor='sort'>Sort: </label>
                    <select name='sort' id='sort'>
                        <option value='lth'>Price: Low to High</option>
                        <option value='htl'>Price: High to Low</option>
                    </select>
                </fieldset>
                <div>
                    <fieldset>
                        <legend>Type</legend>
                        <ul>
                            <li>
                                <input type='radio' name='type' value='all' id='all' onChange={(e) => setTypeOfGuitar(e.target.value)}/>
                                <label htmlFor='all'>All</label>
                            </li>
                            <li>
                                <input type='radio' name='type' value='acoustic' id='acoustic' onChange={(e) => setTypeOfGuitar(e.target.value)}/>
                                <label htmlFor='acoustic'>Acoustic</label>
                            </li>
                            <li>
                                <input type='radio' name='type' value='electric' id='electric' onChange={(e) => setTypeOfGuitar(e.target.value)}/>
                                <label htmlFor='electric'>Electric</label>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Ratings</legend>
                        <ul>
                            <li>
                                <input type="radio" name="rating" value="four and above" id="four and above" onChange={(e)=>setRating(e.target.value)} />
                                <label htmlFor='four and above'>4 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="three and above" id="three and above" onChange={(e)=>setRating(e.target.value)} />
                                <label htmlFor='three and above'>3 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="two and above" id="two and above" onChange={(e)=>setRating(e.target.value)} />
                                <label htmlFor='two and above'>2 <StarIcon/>'s and above</label>
                            </li>
                            <li>
                                <input type="radio" name="rating" value="one and above" id="one and above" onChange={(e)=>setRating(e.target.value)} />
                                <label htmlFor='one and above'>1 <StarIcon/>'s and above</label>
                            </li>
                        </ul>
                    </fieldset>
                </div>
            </form>
        </div>
    );
}

export default Filters