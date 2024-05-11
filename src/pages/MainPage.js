import styled from "styled-components";
import {useEffect, useState} from "react";
import CenterBlock from "../helpers/CenterBlock";
import Header from "../components/Header";
import Filters from "../layouts/MainPage/Filters";
import Recipes from "../layouts/MainPage/Recipes";
import {enumMealType, enumCuisine, enumDifficulty} from "../utils/recipes";
export default  function MainPage({recipes}) {
	const [filterRecipes, setFilterRecipes] = useState(recipes)
	const [firstImage, setFirstImage] = useState([])
	
	const [difficulty, setDifficulty] = useState(0)
	const [typeMeal, setTypeMeal] = useState(0)
	const [cuisine, setCuisine] = useState(0)
	
	useEffect(() => {
		if(recipes.length > 0){
			setFirstImage(recipes[0].image)
			setFilterRecipes(recipes.filter(item => {
				let flag = true
				if(difficulty > 0){
					if(item.difficulty !== enumDifficulty[difficulty])
						flag = false
				}
				if(typeMeal > 0){
					if(item.mealType.findIndex(item => item === enumMealType[typeMeal]) < 0)
						flag = false
				}
				if(cuisine > 0){
					if(item.cuisine !== enumCuisine[cuisine])
						flag = false
				}
				return flag
			}))
		}
	}, [recipes, difficulty, typeMeal, cuisine]);
	
	return (
		<Wrapper>
			<CenterBlock width={1850}>
				<Header>
					<h1>Сборник рецептов из разных стран мира</h1>
				</Header>
				<div className="main_container">
					<Filters img={firstImage}
					         recipes_length={recipes.length}
					         difficulty={difficulty}
					         cuisine={cuisine}
					         typeMeal={typeMeal}
					         setDifficulty={setDifficulty}
					         setCuisine={setCuisine}
					         setTypeMeal={setTypeMeal}/>
					<Recipes recipes={filterRecipes}/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 12px 0;
	.main_container{
		display: flex;
		gap: 12px;
		margin-top: 12px;
	}

	@media (max-width: 940px) {
	  .main_container {
		  flex-wrap: wrap;
	  }
	}
`
