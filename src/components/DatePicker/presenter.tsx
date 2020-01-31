import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components';
import enUS from "date-fns/locale/en-US";
import ShadowBoxType from '../../consts/shadowbox';
import Bottom from './Bottom';

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.5);
`

const Card = styled.div`
    padding:20px 30px;
    background:white;
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    display: grid;
    grid-template-rows: 95px 63px;
`

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider locale={enUS} utils={DateFnsUtils}>
            <Container>
                <Card>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Bottom selectedDate={selectedDate} />
                </Card>

            </Container>
        </MuiPickersUtilsProvider>
    );
}