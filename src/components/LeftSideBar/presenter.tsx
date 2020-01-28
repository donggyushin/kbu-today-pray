import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ShadowBoxType from '../../consts/shadowbox'
import COLORS from '../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../types/reducer'
import LogoutButton from './LogoutButton'
import Button from './Button'

const Container = styled.div`
    width:500px;
    overflow:hidden;
    height:100%;
    box-shadow:${ShadowBoxType.typeOne};
    background:${COLORS.electronBlue};
    color:white;
    position:relative;
    display: grid;
    grid-auto-rows: 110px;
`

const Opening = keyframes`
    from {
        width:0px;
    }
    to {
        width:500px;
    }
`

const Closing = keyframes`
    from {
        width:500px;
    }
    to {
        width:0px;
    }
`

const ContainerOpening = styled.div`
    width:500px;
    overflow:hidden;
    height:100%;
    box-shadow:${ShadowBoxType.typeOne};
    background:${COLORS.electronBlue};
    color:white;
    animation:${Opening} 0.5s;
    position:relative;
    display: grid;
    grid-auto-rows: 110px;
`

const ContainerClosing = styled.div`
    width:0px;
    overflow:hidden;
    height:100%;
    box-shadow:${ShadowBoxType.typeOne};
    background:${COLORS.electronBlue};
    color:white;
    animation:${Closing} 0.5s;
    position:relative;
    display: grid;
    grid-auto-rows: 110px;
`



const Presenter: React.FC = () => {

    const sideNaviReducer = useSelector((state: ReducerStateType) => state.leftNavigationBar)
    const open: boolean = sideNaviReducer.open
    const first: boolean = sideNaviReducer.first
    if (first) {
        return <Container>
            <Button />
            <Button />
            <Button />
            <Button />
            <LogoutButton />
        </Container>

    } else {
        if (open) {
            return <ContainerOpening>
                <Button />
                <Button />
                <Button />
                <Button />
                <LogoutButton />
            </ContainerOpening>
        } else {
            return <ContainerClosing>
                <Button />
                <Button />
                <Button />
                <Button />
                <LogoutButton />
            </ContainerClosing>
        }
    }
}

export default Presenter