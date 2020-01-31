import React, { useState, useEffect, Dispatch } from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'
import { animateScroll } from 'react-scroll'
import { postTodayPray } from '../../../../../../actions/todayPrayForPost'
import { useDispatch } from 'react-redux'

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

interface IPostTodayPraysDispatch {
    type: string
    todayPrays: string[]
}

const Presenter: React.FC = () => {

    const [prays, setPrays] = useState<string[]>([])
    const [pray, setPray] = useState("")

    const postTodayPrayDispatch = useDispatch<Dispatch<IPostTodayPraysDispatch>>()

    useEffect(() => {
        scrollToBottom()
    }, [prays])

    return <Container>
        <Card>
            <Header pray={pray} handleTodayPray={handleTodayPray} onEnterPress={onEnterPress} />
            <Body prays={prays} />
            <Bottom addButtonClikced={addButtonClikced} />
        </Card>
    </Container>

    function addButtonClikced() {
        postTodayPray(prays, postTodayPrayDispatch)
        setPray("")
        setPrays([])
    }

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