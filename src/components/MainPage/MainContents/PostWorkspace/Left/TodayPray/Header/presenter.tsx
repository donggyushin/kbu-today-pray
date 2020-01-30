import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Presenter: React.FC = () => {
    return <Container>
        <TextField
            style={{
                width: '100%'
            }}
            id="standard-basic" label="오늘의 기도" />
    </Container>
}

export default Presenter