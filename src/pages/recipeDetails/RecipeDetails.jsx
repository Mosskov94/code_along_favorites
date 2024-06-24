
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";


const RecipeDetails = () => {

    const {id} = useParams();
    const recipe = useFetchById(id);

    return(

        <div>
            <h1> Recipe details </h1>
        </div>
    );
};

export default RecipeDetails;