import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 100%;
`

const Presenter: React.FC = () => {
    return <Container>
        <Left />
        <Right />
    </Container>
}

export default Presenter