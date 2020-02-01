import { Dispatch } from "react";
import { TODAY_PRAY_DETAIL_OPEN, TODAY_PRAY_DETAIL_CLOSE } from "./types";

export interface IOpenDispatch {
    type: string
    id: string
}

export const open = (id: string, dispatch: Dispatch<IOpenDispatch>) => {
    dispatch({
        type: TODAY_PRAY_DETAIL_OPEN,
        id
    })
}

export interface ICloseDispatch {
    type: string
}

export const close = (dispatch: Dispatch<ICloseDispatch>) => {
    dispatch({
        type: TODAY_PRAY_DETAIL_CLOSE
    })
}