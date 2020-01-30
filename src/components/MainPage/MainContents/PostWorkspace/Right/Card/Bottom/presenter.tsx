import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display:flex;
    justify-content:center;
`

const Presenter: React.FC = () => {
    return <Container>
        <Button style={{
            height: 38
        }} variant="outlined" color="primary">
            Primary
        </Button>
    </Container>
}

export default Presenter