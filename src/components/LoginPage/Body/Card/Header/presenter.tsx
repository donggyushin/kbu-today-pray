import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
`

const BigText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
`

const SmallText = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
`

const Presenter: React.FC = () => {
    return <Container>
        <div />
        <BigText>
            로그인
        </BigText>
        <SmallText>
            성서봇2 관리자 서비스
        </SmallText>
    </Container>
}

export default Presenter