import { ReducerTodayPrayStudentPrayType } from '../types/reducer'
import { TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY, TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY, TODAY_PRAY_FOR_POST_POST_TODAY_PRAY } from './types'
import { Dispatch } from 'react'

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