import { ReducerDatePickerType } from "../types/reducer";
import { DATEPICKER_OPEN, DATEPICKER_CLOSE } from "../actions/types";

interface ActionType {
    type: string
}

const initialState: ReducerDatePickerType = {
    open: false
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case DATEPICKER_OPEN:
            return openDatePicker(state, action)
        case DATEPICKER_CLOSE:
            return closeDatePicker(state, action)
        default:
            return state
    }
}

function openDatePicker(state: ReducerDatePickerType, action: ActionType): ReducerDatePickerType {
    return {
        ...state,
        open: true
    }
}

function closeDatePicker(state: ReducerDatePickerType, action: ActionType): ReducerDatePickerType {
    return {
        ...state,
        open: false
    }
}