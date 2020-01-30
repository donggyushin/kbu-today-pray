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
    return <Container>
        <Card>
            <Header />
            <Body />
            <Bottom />
        </Card>
    </Container>
}

export default Presenter