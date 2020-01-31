import React, { useState, useEffect, Dispatch } from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import { postAds, IPostAdsDispatch } from '../../../../../../actions/todayPrayForPost'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'
import { animateScroll } from 'react-scroll'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    display: grid;
    width:88%;
    height:80%;
    padding:7px;
    box-shadow:${ShadowBoxType.typeOne};
    grid-template-rows: 24% 1fr 20%;
    background:white;
    border-radius:4px;
`


const Presenter: React.FC = () => {

    const [ads, setAds] = useState<string[]>([])
    const [ad, setAd] = useState("")

    const postAdsDispatch = useDispatch<Dispatch<IPostAdsDispatch>>()

    useEffect(() => {
        scrollToBottom()
    }, [ads])

    return <Container>
        <Card>
            <Header ad={ad} handleInput={handleInput} handleKeyPress={handleKeyPress} />
            <Body ads={ads} />
            <Bottom addButtonClicked={addButtonClicked} />
        </Card>
    </Container>

    function addButtonClicked() {
        postAds(ads, postAdsDispatch)
        setAds([])
        setAd("")
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            setAds([
                ...ads,
                ad
            ])
            setAd("")
        }
    }

    function scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "adsBodyCellContainer"
        })
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setAd(event.target.value)
    }
}

export default Presenter