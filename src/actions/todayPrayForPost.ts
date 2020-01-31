import { ReducerTodayPrayStudentPrayType, ReducerTodayPray } from '../types/reducer'
import { TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY, TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY, TODAY_PRAY_FOR_POST_POST_TODAY_PRAY, TODAY_PRAY_FOR_POST_POST_ADS, TODAY_PRAY_FOR_POST_INIT, LOADING_ON, DIALOG_ON, LOADING_OFF, DATEPICKER_CLOSE } from './types'
import { Dispatch } from 'react'
import axios from 'axios'
import { DONGGYU_ENDPOINT } from '../consts/endPoint'

export interface IPostTodayPrayToServerDispatch {
    type: string
    title?: string
    text?: string
    callBack?: () => void
}

interface IPostTodayPrayToServerData {
    ok: boolean
    error: string
    todayPray: ReducerTodayPray
}

export const PostTodayPrayToServer = (todayPray: ReducerTodayPray, date: string, dispatch: Dispatch<IPostTodayPrayToServerDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.post(`${DONGGYU_ENDPOINT}todaypray/${date}`, {
        studentPray: todayPray.studentPray,
        ads: todayPray.ads,
        todayPrayContent: todayPray.todayPrayContent
    }, {
        headers: {
            authentication: localStorage.getItem('token')
        }
    })
        .then(res => res.data)
        .then(data => {
            const { ok, error, todayPray } = data as IPostTodayPrayToServerData
            if (ok) {
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: TODAY_PRAY_FOR_POST_INIT
                })
                dispatch({
                    type: DIALOG_ON,
                    title: "업로드 완료",
                    text: "업로드를 성공하였습니다"
                })
                dispatch({
                    type: DATEPICKER_CLOSE
                })
                console.log(todayPray, ' 업로드 완료')
            } else {
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: DIALOG_ON,
                    title: "죄송해요",
                    text: error,
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
                dispatch({
                    type: DATEPICKER_CLOSE
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
                title: "죄송해요",
                text: "서버와 통신시에 예기치 못한 에러가 발생하였어요. 관리자에게 문의해주세요.",
                callBack: () => {
                    window.location.href = '/'
                }
            })
            dispatch({
                type: DATEPICKER_CLOSE
            })
        })
}

export interface IInitTodayPray {
    type: string
}

export const initTodayPray = (dispatch: Dispatch<IInitTodayPray>) => {
    dispatch({
        type: TODAY_PRAY_FOR_POST_INIT
    })
}

export interface IPostAdsDispatch {
    type: string
    ads: string[]
}

export const postAds = (ads: string[], dispatch: Dispatch<IPostAdsDispatch>) => {
    dispatch({
        type: TODAY_PRAY_FOR_POST_POST_ADS,
        ads
    })
}

interface IPostTodayPrayDispatch {
    type: string
    todayPrays: string[]
}

export const postTodayPray = (todayPrays: string[], dispatch: Dispatch<IPostTodayPrayDispatch>) => {
    dispatch({
        type: TODAY_PRAY_FOR_POST_POST_TODAY_PRAY,
        todayPrays
    })
}



interface IDeleteStudentPrayDispatch {
    type: string
    index: number
}

export const deleteStudentPray = (index: number, dispatch: Dispatch<IDeleteStudentPrayDispatch>) => {
    dispatch({
        type: TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY,
        index
    })
}

interface IPostStudentPrayDispatch {
    type: string
    studentPray: ReducerTodayPrayStudentPrayType
}

export const postStudentPray = (studentPray: ReducerTodayPrayStudentPrayType, dispatch: Dispatch<IPostStudentPrayDispatch>) => {
    dispatch({
        type: TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY,
        studentPray
    })
}