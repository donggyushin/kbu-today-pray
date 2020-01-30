import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const Cell = styled.div`
    padding-top:10px;
    padding-bottom:10px;
`



const Presenter: React.FC = () => {
    return <Container>
        <Cell>광고</Cell>
    </Container>
}

export default Presenter