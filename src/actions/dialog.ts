import { Dispatch } from "react";
import { DIALOG_ON, DIALOG_OFF } from "./types";

interface IDialogOffDispatch {
    type: string
}

export const dialogOff = (dispatch: Dispatch<IDialogOffDispatch>) => {
    dispatch({
        type: DIALOG_OFF
    })
}

interface IDialogInDispatch {
    type: string
    title: string
    text: string
    callBack: (param: any) => void
}

export const dialogOn = (title: string, text: string, dispatch: Dispatch<IDialogInDispatch>, callBack?: (param: any) => void) => {
    dispatch({
        type: DIALOG_ON,
        title,
        text,
        callBack: callBack ? callBack : () => { }
    })
}