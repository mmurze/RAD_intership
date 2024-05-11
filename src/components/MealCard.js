import styled from "styled-components";
import Header from "./Header";
import fill_star from "../pics/fill_star.svg"
import empty_star from "../pics/empty_star.svg"
import timer from "../pics/timer.svg"

export default function MealCard({name, img,  time, difficulty, cuisine, mealType, instructions}) {
	function computedStars(difficulty){
		switch (difficulty){
			case 1:
				return(
					<div className="stars">
						<img src={fill_star} alt="star"/>
						<img src={empty_star} alt="star"/>
						<img src={empty_star} alt="star"/>
					</div>
				)
			case 2:
				return(
					<div className="stars">
						<img src={fill_star} alt="star"/>
						<img src={fill_star} alt="star"/>
						<img src={empty_star} alt="star"/>
					</div>
				)
			case 3:
				return(
					<div className="stars">
						<img src={fill_star} alt="star"/>
						<img src={fill_star} alt="star"/>
						<img src={fill_star} alt="star"/>
					</div>
				)
			default:
				return (
					<div className="stars">
						<img src={empty_star} alt="star"/>
						<img src={empty_star} alt="star"/>
						<img src={empty_star} alt="star"/>
					</div>
				)
		}
	}
	const fullInstructions = instructions.join(' ')
	
	return (
		<Wrapper>
			<div className="left">
				<Header>
					<h4>{name}</h4>
				</Header>
				<div className="image">
					<img src={img} alt="meal"/>
				</div>
			</div>
			<div className="description">
				<div className="text gray_color">
					<p>{fullInstructions}</p>
				</div>
				<div className="time">
					<img src={timer} alt="timer"/>
					<p>
						{time} минут
					</p>
				</div>
				<div className="text">
					<p>Сложность: </p>
					{computedStars(difficulty)}
				</div>
				<div className="text">
					<p>Кухня:</p>
					<p>{cuisine}</p>
				</div>
				<div className="text">
					<p>Тип: </p>
					<ul className="typesMeal">
						{
							mealType.map((item, index) => {
								return(
									<li className="type" key={index}>
										{item}
										<span></span>
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
	display: flex;
	height: 100%;
	.left {
		width: 50%;
		display: flex;
		flex-direction: column;
	}

	.image {
		height: 100%;
		width: 210px;
		margin: 10px auto 20px;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.description {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 15px;
		padding : 16px;
	}

	.stars {
		display: flex;
		gap: 5px;
		width: 25px;
	}
	.text {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		p{
			margin: auto 0;
		}
	}
	.time{
		display: flex;
		gap: 5px;
		p{
			margin: auto 0;
		}
	}
	.typesMeal{
		display: flex;
		li{
			margin-left: 5px;
			span::before{
				content: ",";
			}
			&:nth-last-child(1){
				span::before{
					content: " ";
				}
			}
		}
	}

	.gray_color {
		color: rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 940px) {
		flex-direction: column;
		.left, .description  {
			width: 100%;
		}
	}
`
