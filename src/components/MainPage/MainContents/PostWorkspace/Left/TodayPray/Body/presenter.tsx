import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'

const Container = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`

const Presenter: React.FC = () => {
    return <Container>
        <Cell />
    </Container>
}

export default Presenter