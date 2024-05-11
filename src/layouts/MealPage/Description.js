import styled from "styled-components";
import Header from "../../components/Header";
import circle from "../../pics/li_circle.svg"
export default function Description({meal}) {
	return (
		<Wrapper>
			<div className="left">
				<div className="container">
					<Header><h4>Кухня</h4></Header>
					<div className="description">
						<p>{meal.cuisine}</p>
					</div>
				</div>
				<div className="container">
					<Header><h4>Теги</h4></Header>
					<div className="description tags">
						{
							meal.tags.map((item, index) => {
								return(
									<p className="gray_color" key={index}>#{item} </p>
								)
							})
						}
					</div>
				</div>
				<div className="container">
					<Header><h4>Калорийность</h4></Header>
					<div className="description calories">
						<p>{meal.caloriesPerServing} ккал</p>
						<p className="gray_color">100 грамм</p>
					</div>
				</div>
				<div className="container">
					<Header><h4>Количество порций</h4></Header>
					<div className="description">
						<h3>{meal.servings}</h3>
					</div>
				</div>
				<div className="container last">
					<Header><h4>Ингридиенты</h4></Header>
					<div className="description tags">
						{
							meal.ingredients.map((item, index) => {
								return(
									<p className="gray_color" key={index}>
										{item}
										<span></span>
									</p>
								)
							})
						}
					</div>
				</div>
			</div>
			<div className="right">
				<div className="container">
					<Header><h4>Общее время приготовления</h4></Header>
					<div className="description">
						<p>{meal.cookTimeMinutes} минут</p>
					</div>
				</div>
				<div className="container last">
					<Header><h4>Инструкции по приготовлению</h4></Header>
					<ul className="description instructions">
						{
							meal.instructions.map((item, index) => {
								return(
									<li className="ingredient" key={index}>
										<div className="ticker">
											<img src={circle} alt="circle"/>
										</div>
										<div className="text">
											<p>{item}</p>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;

	p {
		margin: 0;
		width: fit-content;
	}

	.left, .right {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.ingredient {
		display: flex;
		padding-bottom: 7px;
		gap: 16px;
		border-left: #EFEFEF 1px solid;
		&:nth-last-child(1) {
			border-left: none;
		}
		.ticker {
			position: relative;
			top: -5px;
			left: -5px;
		}
		.text {
			position: relative;
			top: -5px;
			width: 90%;
		}
	}

	.description {
		background-color: #fff;
		text-align: left;
		padding: 16px 24px;
		border-top: #EFEFEF 1px solid;

		&.tags {
			display: flex;
			flex-wrap: wrap;
			gap: 5px;

			span::before {
				content: ", ";
			}
			p:nth-last-child(1) {
				span::before {
					content: none;
				}
			}
		}

		&.calories {
			display: flex;
			flex-direction: column;
			gap: 8px
		}
		&.instructions{
			display: flex;
			flex-direction: column;
		}
	}

	.last {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #fff;
	}

	.gray_color {
		color: rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
`
