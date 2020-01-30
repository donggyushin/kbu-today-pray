import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../../types/reducer'
import Card from './Card'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const Label = styled.div`
    font-size:18px;
`

const Presenter: React.FC = () => {

    const StudentPrayReducer = useSelector((state: ReducerStateType) => state.todayPrayForPost.studentPray)


    return <Container>
        <Label>
            학생 기도
        </Label>
        {StudentPrayReducer.map((oneStudentPray, i) => {
            return <Card key={i} index={i} studentPray={oneStudentPray} />
        })}
    </Container>
}

export default Presenter