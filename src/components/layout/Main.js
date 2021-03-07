import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import EmailsView from './EmailsView'
import SideIcons from './SideIcons'

function Main() {
	return (
		<Wrapper>
			<Sidebar />
			<EmailsView />
			<SideIcons />
		</Wrapper>
	)
}

export default Main

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 200px auto 50px;
	//   height: calc(100vh-70px);

	// .MuiSvgIcon-root{
	// color: #5f6368;
	// }
`
