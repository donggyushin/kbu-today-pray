import { ReducerTodayPrayForViewPraysType } from "../types/reducer";
import axios from 'axios'
import { DONGGYU_ENDPOINT } from "../consts/endPoint";
import { Dispatch } from "react";
import { LOADING_ON, LOADING_OFF, DIALOG_ON, TODAY_PRAY_FOR_VIEW_GET_PRAYS } from "./types";

export interface IGetPraysDispatch {
    type: string
    prays?: ReducerTodayPrayForViewPraysType[]
    title?: string
    text?: string
    callBack?: (param: any) => void
    praysCount?: number
}

interface IGetPraysData {
    ok: boolean
    error: string
    prays: ReducerTodayPrayForViewPraysType[]
    praysCount: number
}

export const getPrays = (page: number, dispatch: Dispatch<IGetPraysDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${DONGGYU_ENDPOINT}todaypray/prays/${page}`)
        .then(res => res.data)
        .then(data => {
            const { ok, error, prays, praysCount } = data as IGetPraysData
            if (ok) {
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: TODAY_PRAY_FOR_VIEW_GET_PRAYS,
                    prays,
                    praysCount
                })
            } else {
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: DIALOG_ON,
                    title: "죄송헤요",
                    text: error,
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: LOADING_OFF
            })
            dispatch({
                type: DIALOG_ON,
                title: "죄송헤요",
                text: "서버와 통신도중 에러가 발생하였습니다.",
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })
}