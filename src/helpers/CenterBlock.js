import styled from "styled-components";

export default function CenterBlock({className, width = 1230, children}) {
	return (
		<Wrapper
			className={`center_block ${className ? className : ''}`}
			width={typeof width === "number" ? `${width}px` : width}
		>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: ${p => p.width};
	width: calc(100% - 24px);
	margin: 0 auto;
	position: relative;
`
