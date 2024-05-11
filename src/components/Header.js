import styled from "styled-components";

export default function Header({children}) {
	return (
		<Wrapper className="header">
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #fff;
	text-align: left;
	width: 100%;
	padding: 16px 24px;
	h1{
		font-size: 24px;
	}
	h2{
		font-size: 20px;
	}
	h4{
		font-size: 16px;
	}
`
