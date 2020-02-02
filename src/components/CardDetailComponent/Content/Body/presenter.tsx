import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayForViewPraysType } from '../../../../types/reducer'
import StudentPrays from './StudentPrays'
import TodayPrayContents from './TodayPrayContents'
import Ads from './Ads'

const Container = styled.div`
    overflow-y:scroll;
`

interface IProps {
    pray: ReducerTodayPrayForViewPraysType
}

const Presenter: React.FC<IProps> = ({
    pray
}) => {
    return <Container>
        <StudentPrays studentPrays={pray.studentPray} />
        <TodayPrayContents prays={pray.todayPrayContent} />
        <Ads ads={pray.ads} />
    </Container>
}

export default Presenter