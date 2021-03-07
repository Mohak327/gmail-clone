import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import RefreshIcon from '@material-ui/icons/Refresh'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import IconButton from '@material-ui/core/IconButton'
// Only for ripple effect.

import {EmailData} from '../../temp/EmailData'


function EmailsView () {
  return (
    <Wrapper>
        <TopWrapper>
            <Checkbox/>

            <IconButton>
                <RefreshIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </TopWrapper>

        <EmailsConatiner>
        </EmailsConatiner>
    </Wrapper>
  )
}

export default EmailsView

const Wrapper = styled.div`

`
const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
`
const EmailsConatiner = styled.div`

`
