import React from 'react'
import styled from 'styled-components'
import Body from './Body'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 20% 1fr 14%;
`

const Header = styled.div``

const Bottom = styled.div``


const Presenter: React.FC = () => {
    return <Container>
        <Header />
        <Body />
        <Bottom />
    </Container>
}

export default Presenter