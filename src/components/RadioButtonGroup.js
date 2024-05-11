import styled from "styled-components";

export default function RadioButtonGroup({className, children}) {
	return (
		<Wrapper className={`radio_button_group ${className ? className : ''}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	margin: 4px 0;
	
	@media (max-width: 480px){
		flex-wrap: wrap;
	}
`
