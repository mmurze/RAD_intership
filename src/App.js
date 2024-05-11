import styled from "styled-components";
import MainPage from "./pages/MainPage";
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MealPage from "./pages/MealPage";
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
	const [recipes, setRecipes] = useState([])
	useEffect(() => {
		axios.get('https://dummyjson.com/recipes').then((r) => setRecipes(r.data.recipes))
	}, [setRecipes]);
	
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
						<Route path="/" element={<MainPage recipes={recipes}/>}/>
						<Route path="/recipe/:id" element={<MealPage recipes={recipes}/>}>
						
						</Route>
						<Route path="*" element={<h1>Ресурс не найден</h1>}/>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	)
}

const Wrapper = styled.div`
	background: #EFEFEF;
`
