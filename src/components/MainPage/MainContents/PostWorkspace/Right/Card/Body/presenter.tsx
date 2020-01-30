import React from 'react'
import styled from 'styled-components'
import StudentPray from './StudentPray'
import TodayPray from './TodayPray'
import Ads from './Ads'

const Container = styled.div`
    overflow-y: scroll;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
`

const Presenter: React.FC = () => {


    return <Container>
        <StudentPray />
        <TodayPray />
        <Ads />
    </Container>
}

export default Presenter