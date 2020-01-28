import { Dispatch } from "react";
import axios from 'axios'
import { DONGGYU_ENDPOINT } from "../consts/endPoint";
import { ReducerUserType } from "../types/reducer";
import { DIALOG_ON, USER_LOGIN, LOADING_ON, LOADING_OFF, USER_LOGOUT } from "./types";

interface IUserLogoutDispatch {
    type: string
}

export const userLogout = (dispatch: Dispatch<IUserLogoutDispatch>) => {
    dispatch({
        type: USER_LOGOUT
    })
}

interface IUserLoginDispatch {
    type: string
    title?: string
    text?: string
    callBack?: (param: any) => void
    token?: string
    user?: ReducerUserType
}

interface IUserLoginData {
    ok: boolean
    error: string
    token: string
    user: ReducerUserType
}

export const userLogin = (email: string, password: string, dispatch: Dispatch<IUserLoginDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.post(`${DONGGYU_ENDPOINT}user/login`, {
        email,
        password
    })
        .then(res => res.data)
        .then(data => {
            const {
                ok,
                error,
                token,
                user
            }: IUserLoginData = data
            if (ok) {
                dispatch({
                    type: USER_LOGIN,
                    token,
                    user
                })
            } else {
                dispatch({
                    type: DIALOG_ON,
                    title: "알림",
                    text: error,
                    callBack: () => { }
                })
            }
            dispatch({
                type: LOADING_OFF
            })
        })
        .catch(err => {
            console.log(`Error occred at action/user.ts userLogin Func`)
            console.error(err)
            dispatch({
                type: LOADING_OFF
            })
            dispatch({
                type: DIALOG_ON,
                title: "에러발생",
                text: "예기치 못한 서버에러가 발생하였습니다. 관리자에게 문의해주세요. ",
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })
}