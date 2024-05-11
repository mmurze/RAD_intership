import styled from "styled-components";

export default function Option({label,
	                               isActive = false ,
	                               isDisabled = false,
	                               className,
	                               onClick}) {
	return (
		<Wrapper className={`option ${className ? className : ''}${isActive && !isDisabled ? 'active' : ''}${isDisabled ? 'disabled' : ''}`}>
			<button disabled={isDisabled} onClick={() =>  onClick()}>
				<p>{label}</p>
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 8px 0;
	width: 70px;
	border: #D9D9D9 1px solid;
	display: flex;
	&.active {
		background-color: #1890FF;
		color: #fff;
	}
	&.disabled {
		border-color: #eeeeee;
		color: #D9D9D9;
	}
`
