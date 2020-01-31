import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 7px;
    padding-bottom: 7px;
`

interface IProps {
    pray: string
}

const Presenter: React.FC<IProps> = ({
    pray
}) => {
    return <Container>
        {pray}
    </Container>
}

export default Presenter