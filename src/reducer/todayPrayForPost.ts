import { ReducerTodayPray, ReducerTodayPrayStudentPrayType } from "../types/reducer";
import { TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY, TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY, TODAY_PRAY_FOR_POST_POST_TODAY_PRAY } from "../actions/types";

interface ActionType {
    type: string
    studentPray: ReducerTodayPrayStudentPrayType
    index: number
    todayPrays: string[]
}

const initialState: ReducerTodayPray = {
    year: 0,
    month: 0,
    day: 0,
    studentPray: [],
    ads: [],
    todayPrayContent: []
}

export default function (state: ReducerTodayPray = initialState, action: ActionType) {
    switch (action.type) {
        case TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY:
            return postStudentPray(state, action)

        case TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY:
            return deleteStudentPray(state, action)

        case TODAY_PRAY_FOR_POST_POST_TODAY_PRAY:
            return postTodayPrays(state, action)

        default:
            return state
    }
}

function postTodayPrays(state: ReducerTodayPray, action: ActionType): ReducerTodayPray {
    const { todayPrays } = action
    return {
        ...state,
        todayPrayContent: todayPrays
    }
}

function deleteStudentPray(state: ReducerTodayPray, action: ActionType): ReducerTodayPray {
    const { index } = action;
    const updatedStudentPrays: ReducerTodayPrayStudentPrayType[] = state.studentPray.filter((data, i) => i !== index)
    return {
        ...state,
        studentPray: updatedStudentPrays
    }
}

function postStudentPray(state: ReducerTodayPray, action: ActionType): ReducerTodayPray {
    const { studentPray } = action
    return {
        ...state,
        studentPray: [
            ...state.studentPray,
            studentPray
        ]
    }
}