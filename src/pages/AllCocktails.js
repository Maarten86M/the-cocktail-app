import React,{useState, useEffect} from "react";
import axios from "axios";

function AllCocktails() {

    const [allCocktails, setAllCocktails] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);
                setAllCocktails(result.data);
                console.log(result.data);
            }catch (e){
                console.error(e);
            }
        }
        if (allCocktails){
            fetchData()
        }
    },[allCocktails]);

    return(
        <div className="pagina">
            <h1>All Cocktails</h1>
        </div>
    )
}
export default AllCocktails;