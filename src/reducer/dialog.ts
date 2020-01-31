import { ReducerDialogType } from "../types/reducer";
import { DIALOG_ON, DIALOG_OFF } from "../actions/types";


interface ActionType {
    type: string
    title: string
    text: string
    callBack?: (param: any) => void
}

const initialState: ReducerDialogType = {
    open: false,
    title: "",
    text: "",
    callBack: () => { }
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case DIALOG_ON:
            return dialogOn(state, action)
        case DIALOG_OFF:
            return dialogOff(state, action)
        default:
            return state;
    }
}

function dialogOff(state: ReducerDialogType, action: ActionType): ReducerDialogType {
    return {
        open: false,
        title: "",
        text: "",
        callBack: () => { }
    }
}

function dialogOn(state: ReducerDialogType, action: ActionType): ReducerDialogType {
    const { title, text, callBack } = action
    return {
        ...state,
        open: true,
        title,
        text,
        callBack: callBack ? callBack : () => { }
    }
}