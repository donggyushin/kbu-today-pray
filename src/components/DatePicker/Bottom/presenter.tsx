import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { closeDatePicker, IDatePickerDispatch } from '../../../actions/datepicker'
import { PostTodayPrayToServer, IPostTodayPrayToServerDispatch } from '../../../actions/todayPrayForPost'
import { dialogOn, IDialogInDispatch } from '../../../actions/dialog'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerStateType } from '../../../types/reducer'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    selectedDate: Date | null
}

const Presenter: React.FC<IProps> = ({
    selectedDate
}) => {

    const closeDatePickerDispatch = useDispatch<Dispatch<IDatePickerDispatch>>()
    const postTodayPrayToServerDispatch = useDispatch<Dispatch<IPostTodayPrayToServerDispatch>>()
    const todayPray = useSelector((state: ReducerStateType) => state.todayPrayForPost)
    const dialogDispatch = useDispatch<Dispatch<IDialogInDispatch>>()

    return <Container>
        <ButtonContainer>
            <Button onClick={cancleButtonClicked} variant="contained" color="secondary">
                취소
            </Button>
        </ButtonContainer>
        <ButtonContainer>
            <Button onClick={submitButtonClicked} variant="contained" color="primary">
                제출
            </Button>
        </ButtonContainer>
    </Container>

    function submitButtonClicked() {
        if (selectedDate) {
            PostTodayPrayToServer(todayPray, selectedDate.getTime().toString(), postTodayPrayToServerDispatch)

        } else {
            dialogOn("경고", "정확한 날짜가 선택되어지지 않았습니다. 날짜를 다시 정확하게 선택한 후 제출해주세요.", dialogDispatch)
        }
    }

    function cancleButtonClicked() {
        closeDatePicker(closeDatePickerDispatch)
    }
}

export default Presenter