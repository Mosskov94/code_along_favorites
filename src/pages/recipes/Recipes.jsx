import useFetch from "../../hooks/useFetch";
import RecipeCard from "../../components/recipeCard/RecipeCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import { useState } from "react";
import Button from "../../components/button/Button";

const Recipes = () => {
  const { recipes, breakfast } = useFetch();
  const { recipe } = useFetchById(20);
  const [filteredRecipes, setFilteredRecipes] = useState([...breakfast])
  const [activeFilter, setactiveFilter] = useState("All")

  const filters = {
    All: recipes, 
    Breakfast: breakfast
  }

  const handleFilterChange = (filter) =>  {
    setactiveFilter(filter);
    setFilteredRecipes(filters[filter])
  }

  const recipesArray = filteredRecipes?.length > 0 ?  filteredRecipes : recipes


  return (
    <section>
      <PageHeader title='Opskrifter' headerImg={recipe?.image} />


      <div className="filterButtons">
              <Button title="All" className={activeFilter === "All" ? "active" : ""}
              onClick={() => handleFilterChange("All")}
              />

              <Button title="BreakFast" className={activeFilter === "Breakfast" ? "active" : ""}
              onClick={() => handleFilterChange("Breakfast")}
              />
      </div>


      <div className='recipes'>
        {recipesArray.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </section>
  );
};
export default Recipes;