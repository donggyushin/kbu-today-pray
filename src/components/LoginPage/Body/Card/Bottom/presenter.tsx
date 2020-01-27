import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    align-items: flex-start;
`

const ButtonContainer = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
`

interface IProps {
    loginButtonClicked: () => void
}

const Presenter: React.FC<IProps> = ({
    loginButtonClicked
}) => {
    return <Container>
        <div />
        <div />
        <ButtonContainer>
            <Button onClick={loginButtonClicked} variant="contained" color="primary">
                로그인
            </Button>
        </ButtonContainer>
    </Container>
}

export default Presenter