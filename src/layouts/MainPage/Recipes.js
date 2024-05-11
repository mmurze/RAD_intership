import styled from "styled-components";
import MealCard from "../../components/MealCard";
import {enumDifficulty} from "../../utils/recipes";
import Header from "../../components/Header";
import { Pagination } from 'semantic-ui-react'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Recipes({recipes}) {
	const navigate = useNavigate();
	function computedDifficulty(difficulty){
		return enumDifficulty.findIndex(item => item === difficulty)
	}
	const countCards = 6
	const [activeCards, setActiveCards] = useState(recipes.slice(0, countCards))
	const [activePage, setActivePage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	
	useEffect(() => {
		setTotalPages(Math.ceil(recipes.length/countCards))
		setActivePage(1)
		setActiveCards(recipes.slice(0, countCards))
	}, [recipes])
	
	useEffect(() => {
		if(activePage === totalPages)
			setActiveCards(recipes.slice((activePage - 1)*countCards, recipes.length))
		else
			setActiveCards(recipes.slice((activePage - 1)*countCards, activePage*countCards))
	}, [activePage])
	
	return (
		<Wrapper>
			<Header>
				<h2>Найденные рецепты</h2>
			</Header>
			<div className="recipes_container">
				<div className="recipes">
					{
						activeCards.map((item, index) => {
							return(
								<div className="meal_card" onClick={() => navigate(`/recipe/${item.id}`)} key={index}>
									<MealCard name={item.name}
									          img={item.image}
									          time={item.cookTimeMinutes}
									          cuisine={item.cuisine}
									          difficulty={computedDifficulty(item.difficulty)}
									          mealType={item.mealType}
									          instructions={item.instructions}
									/>
								</div>
							)
						})
					}
				</div>
				<div className="pagination">
					<Pagination
						totalPages={totalPages}
						activePage={activePage}
						ellipsisItem={undefined}
						onPageChange={(event, data) => setActivePage(data.activePage)}
					/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	background-color: #EFEFEF;
	display: flex;
	flex-direction: column;
	.pagination{
		display: flex;
		justify-content: center;
		margin: 12px 0;
	}
	.recipes_container{
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-between;
	}
	.recipes{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
		gap: 20px;
		justify-content: center;
		margin-top: 12px;
	}
	.meal_card{
		flex: 1;
		background-color: #fff;
	}

	@media (max-width: 940px) {
		.recipes {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
`
