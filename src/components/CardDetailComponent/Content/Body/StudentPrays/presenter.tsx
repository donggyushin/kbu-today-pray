import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../types/reducer'
import Card from './Card'
import COLORS from '../../../../../consts/colors'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:10px;
`

const Text = styled.div`
    font-weight:600;
    padding-bottom:5px;
    border-bottom:1px solid ${COLORS.weakGray};
`

interface IProps {
    studentPrays: ReducerTodayPrayStudentPrayType[]
}

const Presenter: React.FC<IProps> = ({
    studentPrays
}) => {
    return <Container>
        <Text>
            학생분들의 기도
        </Text>
        {studentPrays.map((pray, i) => {
            return <Card pray={pray} key={i} />
        })}
    </Container>
}

export default Presenter