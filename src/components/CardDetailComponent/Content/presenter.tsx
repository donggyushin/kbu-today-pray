import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayForViewPraysType } from '../../../types/reducer'
import Header from './Header'
import Title from './Title'
import Body from './Body'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-auto-columns: 91%;
    grid-template-rows: 7% 7% 1fr;
`

interface IProps {
    pray: ReducerTodayPrayForViewPraysType
}

const Presenter: React.FC<IProps> = ({
    pray
}) => {
    return <Container>
        <Header date={pray.date} />
        <Title writerName={pray.writer.name} />
        <Body pray={pray} />
    </Container>
}

export default Presenter