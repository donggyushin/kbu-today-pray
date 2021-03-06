import React from 'react'
import styled from 'styled-components'
import LeftSideBar from '../LeftSideBar'
import Main from './MainContents'

const Container = styled.div`
    display:flex;
    height:100vh;
`

const Presenter: React.FC = () => {
    return <Container>
        <LeftSideBar />
        <Main />
    </Container>
}

export default Presenter