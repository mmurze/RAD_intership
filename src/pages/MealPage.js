import styled from "styled-components";
import CenterBlock from "../helpers/CenterBlock";
import Header from "../components/Header";
import Description from "../layouts/MealPage/Description";
import Picture from "../layouts/MealPage/Picture";
import {useNavigate, useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js'

export default function MealPage({recipes}){
	const navigate = useNavigate();
	const { id } = useParams();
	if(Number(id) > recipes.length)
		navigate("/");
	
	const patternMeal = {
		"caloriesPerServing":0,
		"cookTimeMinutes": 0,
		"cuisine": "",
		"difficulty": "",
		"id": 0,
		"image": '',
		"ingredients": [],
		"instructions" : [],
		"mealType": [],
		"name": '',
		"prepTimeMinutes": 0,
		"rating": 0,
		"reviewCount": 0,
		"servings": 0,
		"tags": [],
		"userId": 0,
	}
	const [meal, setMeal] = useState(patternMeal)
	
	useEffect((() => {
		if(recipes.length > 0)
			setMeal(recipes.find(item => item.id === Number(id)))
		else
			setMeal(patternMeal)
	}), [recipes, id, patternMeal])
	
	return (
		<Wrapper>
			<CenterBlock width={1900}>
				<Header>
					<button className="icon" onClick={() => navigate("/")}>
						<Icon path={mdiArrowLeft} size={1} />
					</button>
					<h1>{meal.name}</h1>
				</Header>
				<div className="meal_container">
					<Description meal={meal}/>
					<Picture img={meal.image} />
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 12px 0;
	.meal_container{
		margin-top: 12px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.header{
		display: flex;
		align-items: baseline;
		gap: 10px;
		.icon{
			width: fit-content;
			height: fit-content;
		}
		h1{
			margin: 0;
		}
	}

	@media (max-width: 1000px) {
		.meal_container {
			display: flex;
			flex-direction: column;
		}
	}
	
`
