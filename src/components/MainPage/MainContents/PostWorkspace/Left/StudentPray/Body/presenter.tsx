import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import PrayCell from './PrayCell'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../../types/reducer'

const Container = styled.div`
    padding-top:20px;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
`

const PrayCellContainer = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`

interface IProps {
    pray: string
    handlePray: (event: React.ChangeEvent<HTMLInputElement>) => void
    studentPray: ReducerTodayPrayStudentPrayType
    prayOnEnterKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<IProps> = ({
    pray,
    handlePray,
    studentPray,
    prayOnEnterKeyDown
}) => {
    return <Container >
        <TextField value={pray} onKeyPress={prayOnEnterKeyDown} onChange={handlePray} id="standard-basic" label="학생기도를 입력해주세요" />
        <PrayCellContainer id="studentPrayBodyContainer">
            {studentPray.prays.map((pray, i) => {
                return <PrayCell pray={pray} key={i} />
            })}
        </PrayCellContainer>
    </Container>
}

export default Presenter