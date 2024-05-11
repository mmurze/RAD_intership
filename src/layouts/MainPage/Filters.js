import styled from "styled-components";
import MySelect from "../../components/MySelect";
import {enumMealType, enumCuisine, enumDifficulty} from "../../utils/recipes";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import Option from "../../components/Option";
import {useNavigate} from "react-router-dom";

export default function Filters({img, cuisine, typeMeal, difficulty, setDifficulty, setTypeMeal, setCuisine, recipes_length}) {
	const navigate = useNavigate()
	const cancelFilter = () => {
		setDifficulty(0)
		setTypeMeal(0)
		setCuisine(0)
	}
	return (
		<Wrapper>
			<div className="header">
				<div className="image">
					<img src={img} alt="food" width={150}/>
				</div>
				<p className="description">
					В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.
					<br/>
					<br/>
					Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
					<br/>
					<br/>
					Наш сервис поможет: выбирайте параметры - и вперед!
				</p>
			</div>
			<div className="filters">
				<div className="filter_container">
					<p className="title">Кухня: </p>
					<MySelect options={enumCuisine}
					          value={cuisine}
					          onChange={value => setCuisine(value)}/>
				</div>
				<div className="filter_container">
					<p className="title">Тип блюда: </p>
					<MySelect options={enumMealType}
					          value={typeMeal}
					          onChange={value => setTypeMeal(value)}/>
				</div>
				<div className="filter_container">
					<p className="title">Сложность приготовления: </p>
					<RadioButtonGroup>
						{
							enumDifficulty.map((item, index) => {
								return(
									<Option key={index}
													label={item}
									        isActive={difficulty === index}
									        onClick={() => setDifficulty(index)}
									        isDisabled={index === 3}/>
								)
							})
						}
					</RadioButtonGroup>
				</div>
				<div className="filter_container">
					<button className="cancel_button" onClick={() => cancelFilter()}>
						Сбросить все фильтры
					</button>
				</div>
			</div>
			<div className="magic_button">
				<p>А еще можно попробовать на вкус удачу</p>
				<button onClick={() => navigate(`/recipe/${Math.floor(Math.random() * (recipes_length - 1 + 1)) + 1}`)}>
					Мне повезет!
				</button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #fff;
	width: 30%;
	min-width: 440px;
	padding: 24px;

	.header {
		padding: 24px;

		.image {
			text-align: center;
		}

		.description {
			font-size: 14px;
		}
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: 18px;

		.filter_container {
			display: flex;
			gap: 5px;
			width: 390px;

			.title {
				margin: auto 0;
				text-align: right;
				width: 108px;
				font-weight: bold;
			}

			.cancel_button {
				width: fit-content;
				color: rgba(24, 144, 255, 0.5);
			}
		}
	}

	.magic_button {
		margin-top: 50px;
		color: rgba(0, 0, 0, 0.5);
		button {
			color: rgba(0, 0, 0, 0.5);
			width: fit-content;
			border: #D9D9D9 1px solid;
			padding: 6px 15px;
			border-radius: 3px;
		}
	}

	@media (max-width: 940px) {
		width: 100%;
		min-width: 0;
	}

	@media (max-width: 480px) {
		padding: 15px;

		.header {
			padding: 0;
		}

		.filters {
			margin-top: 10px;

			.filter_container {
				width: 100%;
				flex-wrap: wrap;

				.title {
					margin: auto 0;
					text-align: right;
					width: fit-content;
					font-weight: bold;
				}
			}
		}
	}

`
