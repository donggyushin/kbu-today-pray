import { Dispatch } from "react";
import { LEFT_NAV_OPEN, LEFT_NAV_CLOSE } from "./types";

interface ILeftNaviOpenDispatch {
    type: string
}

export const leftNaviOpen = (dispatch: Dispatch<ILeftNaviOpenDispatch>) => {
    dispatch({
        type: LEFT_NAV_OPEN
    })
}

export const leftNaviClose = (dispatch: Dispatch<ILeftNaviOpenDispatch>) => {
    dispatch({
        type: LEFT_NAV_CLOSE
    })
}