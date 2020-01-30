import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'
import { animateScroll } from 'react-scroll'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    width:88%;
    height:80%;
    box-shadow:${ShadowBoxType.typeOne};
    border-radius:4px;
    display: grid;
    grid-template-rows: 24% 1fr 20%;
    padding:7px;
    border-radius:4px;
    background:white;
`



const Presenter: React.FC = () => {

    const [prays, setPrays] = useState<string[]>([])
    const [pray, setPray] = useState("")

    useEffect(() => {
        scrollToBottom()
    }, [prays])

    return <Container>
        <Card>
            <Header pray={pray} handleTodayPray={handleTodayPray} onEnterPress={onEnterPress} />
            <Body prays={prays} />
            <Bottom />
        </Card>
    </Container>

    function onEnterPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            appendPrays()
        }
    }

    function handleTodayPray(event: React.ChangeEvent<HTMLInputElement>) {
        setPray(event.target.value)
    }

    function appendPrays() {
        setPrays([
            ...prays,
            pray
        ])
        setPray("")
    }

    function scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "todaypraybody"
        })
    }

}

export default Presenter