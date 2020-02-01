import { Dispatch } from "react";
import { LOADING_ON, LOADING_OFF } from "./types";

export interface ILoadingDispatch {
    type: string
}

export const loadingOff = (dispatch: Dispatch<ILoadingDispatch>) => {
    dispatch({
        type: LOADING_OFF
    })
}

export const loadingOn = (dispatch: Dispatch<ILoadingDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
}