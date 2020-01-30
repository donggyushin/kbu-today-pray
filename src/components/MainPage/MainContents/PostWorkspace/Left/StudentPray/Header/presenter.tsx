import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../../types/reducer'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`

interface IProps {
    studentPray: ReducerTodayPrayStudentPrayType
    handleStudentName: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleStudentGrade: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<IProps> = ({
    studentPray,
    handleStudentGrade,
    handleStudentName
}) => {
    return <Container>
        <TextField
            style={{
                marginRight: 20
            }}
            id="outlined-basic" value={studentPray.name} label="학생 이름" variant="outlined"
            onChange={handleStudentName}
        />
        <TextField
            style={{
                width: 120
            }}
            onChange={handleStudentGrade}
            id="outlined-basic" type="number" value={studentPray.grade} label="학생 학년" variant="outlined" />
    </Container>
}

export default Presenter