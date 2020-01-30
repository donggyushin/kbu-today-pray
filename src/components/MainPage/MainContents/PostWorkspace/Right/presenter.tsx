import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Presenter: React.FC = () => {
    return <Container>
        <Card />
    </Container>
}

export default Presenter