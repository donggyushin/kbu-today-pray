import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { IDatePickerDispatch, openDatePicker } from '../../../../../../../actions/datepicker'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    display:flex;
    justify-content:center;
`

const Presenter: React.FC = () => {

    const datePickerDispatch = useDispatch<Dispatch<IDatePickerDispatch>>()

    return <Container>
        <Button style={{
            height: 38
        }} variant="outlined" color="primary"
            onClick={buttonClicked}
        >
            제출하기
        </Button>
    </Container>

    function buttonClicked() {
        openDatePicker(datePickerDispatch)
    }
}

export default Presenter