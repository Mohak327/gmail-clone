import React from 'react'
import styled from 'styled-components'

import Compose from './buttons/Compose'

import { sidebarButtonItems } from './data/SidebarButtonItems'
import { bottomIcons } from './data/BottomIconsData'

import VideocamIcon from '@material-ui/icons/Videocam'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
// Only for ripple effect.

function Sidebar () {
  return (
    <Wrapper>
        <TopSectionWrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonsWrapper>
            {
                sidebarButtonItems.map(item => (
                    <SidebarButtonItem>
                    {item.icon} {item.text}
                    </SidebarButtonItem>
                ))
            }
            </SideButtonsWrapper>
        </TopSectionWrapper>


        <BottomSectionWrapper>

            <SidebarSectionWrapper>
                <Title>Meet</Title>
                <p><VideocamIcon />New Meeting</p>
                <p><KeyboardIcon />Join Meeting</p>
            </SidebarSectionWrapper>

            <SidebarSectionWrapper>
                <Title>Hangouts</Title>
                <p><AccountCircleIcon />Mohak Sharma</p>
            </SidebarSectionWrapper>

            <BottomIconsWrapper>
                {
                bottomIcons.map(icon => (
                    <>
                    <IconButton>{icon}</IconButton>
                    </>
                ))
                }
            </BottomIconsWrapper>
        </BottomSectionWrapper>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`
const SideButtonsWrapper = styled.div`

`
const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  cursor: pointer;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  margin-right: 8px;

  :hover{
    background-color: #f5f7f7;
  }
`

const Title = styled.h4`
    padding-left: 25px;
    margin-top: 10px;
    margin-bottom: 5px;
`
const SidebarSectionWrapper = styled.div`
    border-top: 1px solid lightgray;

    p{
        display: grid;
        grid-template-columns: 20% auto;
        cursor: pointer;
        color: gray;
        padding: 5px 25px;
        :hover{
            background-color: #f5f7f7;
        }
    }
`

const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: gray;
    border-top: 1px solid lightgray;
    margin-top: 10px;


    .MuiSvgIcon-root{
        padding: 3px 0;
        // margin-top: 10px;

        :hover{
            background-color: #f5f7f7;
        }
    }
`
const TopSectionWrapper = styled.div`

`

const BottomSectionWrapper = styled.div`
    margin-bottom: 3px;
`