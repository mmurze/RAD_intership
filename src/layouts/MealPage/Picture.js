import styled from "styled-components";

export default function Picture({img}) {
	return (
		<Wrapper>
			<img src={img} alt=""/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: auto;
	img {
		object-fit: cover;
		width: 100vh;
		height: 100%;
	}
 
	
`
