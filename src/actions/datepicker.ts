import { Dispatch } from "react";
import { DATEPICKER_OPEN, DATEPICKER_CLOSE } from "./types";

export interface IDatePickerDispatch {
    type: string
}

export const closeDatePicker = (dispatch: Dispatch<IDatePickerDispatch>) => {
    dispatch({
        type: DATEPICKER_CLOSE
    })
}

export const openDatePicker = (dispatch: Dispatch<IDatePickerDispatch>) => {
    dispatch({
        type: DATEPICKER_OPEN
    })
}