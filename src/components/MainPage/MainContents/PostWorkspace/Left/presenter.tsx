import React from 'react'
import styled from 'styled-components'
import StudentPray from './StudentPray'
import TodayPray from './TodayPray'
import Ads from './Ads'

const Container = styled.div`
    display: grid;
    grid-template-rows: 50% 25% 25%;
`

const Presenter: React.FC = () => {
    return <Container>
        <StudentPray />
        <TodayPray />
        <Ads />
    </Container>
}

export default Presenter