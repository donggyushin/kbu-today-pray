import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../types/reducer'
import { leftNaviOpen, leftNaviClose } from '../../../../actions/leftNavigationBar'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    
`

const ChevronRight = styled.i`
    font-size: 20px;
    padding: 10px;
    transform:rotate(180deg);
`

const TurningLeft = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(180deg);
    }
`

const ChevronTurningLeft = styled.i`
    font-size: 20px;
    transform:rotate(180deg);
    animation:${TurningLeft} 0.5s;
    padding: 10px;
`

const TurningRight = keyframes`
    from {
        transform:rotate(180deg);
    }
    to {
        transform:rotate(360deg);
    }
`

const ChevronTurningRight = styled.i`
    font-size: 20px;
    animation:${TurningRight} 0.5s;
    padding: 10px;
`

interface ILeftNavDispatch {
    type: string
}


const Presenter: React.FC = () => {

    const leftNavDispatch = useDispatch<Dispatch<ILeftNavDispatch>>()

    const LeftSideBarReducer = useSelector((state: ReducerStateType) => state.leftNavigationBar)
    const first = LeftSideBarReducer.first
    const open = LeftSideBarReducer.open
    return <Container>
        {first && <ChevronRight onClick={turnDownSideBar} className="fas fa-chevron-right" />}
        {(!first && open) && <ChevronTurningLeft onClick={turnDownSideBar} className="fas fa-chevron-right" />}
        {(!first && !open) && <ChevronTurningRight onClick={turnOnSideBar} className="fas fa-chevron-right" />}

    </Container>

    function turnOnSideBar() {
        leftNaviOpen(leftNavDispatch)
    }

    function turnDownSideBar() {
        leftNaviClose(leftNavDispatch)
    }
}

export default Presenter