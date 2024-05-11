import styled from "styled-components";
import  { Select } from 'semantic-ui-react'

export default function MySelect({options, onChange, value }) {

	const option = options.map((item, index) => {
		return {key: index, text: item, value: index}
	})

	return (
		<Wrapper>
			<Select options={option} value={value} onChange={(e, {value}) => onChange(value)} />
		</Wrapper>
	)
}

const Wrapper = styled.div`

`
