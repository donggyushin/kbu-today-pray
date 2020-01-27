import React from 'react'
import styled from 'styled-components'
import { PacmanLoader } from 'react-spinners'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    align-items:center;
    justify-content:center;
`

export default function () {

    return <Container>
        <PacmanLoader color={'white'} />
    </Container>
}