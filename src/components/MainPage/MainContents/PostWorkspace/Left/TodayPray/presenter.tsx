import React from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'

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
    return <Container>
        <Card>
            <Header />
            <Body />
            <Bottom />
        </Card>
    </Container>
}

export default Presenter