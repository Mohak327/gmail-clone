import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'

const EmailItem = ({ starred, from, subject, message, received, read }) => {
	const [ star, setStar ] = useState(starred)

	return (
		<Wrapper>
			<Checkbox />
			<IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
				{star ? <StarIcon htmlColor='#f7cb69' /> : <StarBorderIcon />}
			</IconButton>

			{/* If read = false, classname will be unread. */}
			<p className={!read && 'unread'}>{from}</p>

			<div>
				<p className={!read && 'unread'}>{subject}&nbsp;</p> - <span>&nbsp;{message}</span>
			</div>

			<p className={!read && 'unread'}>{received}</p>
		</Wrapper>
	)
}

export default EmailItem

const Wrapper = styled.div`
	padding-left: 20px;
	height: 48px;
	border-top: 1px solid lightgray;
	display: grid;
	grid-template-columns: min-content min-content 120px auto 50px;
	align-items: center;
    cursor: pointer;
    padding-right: 20px;

    div{
        display: flex;


        span{
            color: darkgray;
            font-weight: lighter;
        }
    }

    .unread{
        color: black;
        font-weight: bolder;
    }
`
