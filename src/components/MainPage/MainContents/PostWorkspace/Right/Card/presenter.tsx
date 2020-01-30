import React from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import Body from './Body'
import Bottom from './Bottom'

const Container = styled.div`
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    width: 500px;
    height: 90%;
    display: grid;
    grid-template-rows: 1fr 8%;
    background:white;
    border-radius:4px;
`

const Presenter: React.FC = () => {
    return <Container>
        <Body />
        <Bottom />
    </Container>
}

export default Presenter