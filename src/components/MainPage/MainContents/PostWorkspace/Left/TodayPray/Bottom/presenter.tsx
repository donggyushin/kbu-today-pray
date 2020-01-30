import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'


const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Presenter: React.FC = () => {
    return <Container>
        <Button variant="contained" color="primary">
            추가
</Button>
    </Container>
}

export default Presenter