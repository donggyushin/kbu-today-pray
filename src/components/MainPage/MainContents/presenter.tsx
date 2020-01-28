import React from 'react'
import styled from 'styled-components'
import NavigationToggleButton from './NavigationToggleButton'

const Container = styled.div`
    width:100%;
    position:relative;
`

const Presenter: React.FC = () => {
    return <Container>
        <NavigationToggleButton />
    </Container>
}

export default Presenter