import { ReducerTodayPray, ReducerTodayPrayStudentPrayType } from "../types/reducer";
import { TODAY_PRAY_FOR_POST_POST_STUDENT_PRAY, TODAY_PRAY_FOR_POST_DELETE_STUDENT_PRAY, TODAY_PRAY_FOR_POST_POST_TODAY_PRAY, TODAY_PRAY_FOR_POST_POST_ADS, TODAY_PRAY_FOR_POST_INIT } from "../actions/types";

interface ActionType {
    type: string
    studentPray: ReducerTodayPrayStudentPrayType
    index: number
    todayPrays: string[]
    ads: string[]
}

const initialState: ReducerTodayPray = {

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

        case TODAY_PRAY_FOR_POST_POST_ADS:
            return postAds(state, action)

        case TODAY_PRAY_FOR_POST_INIT:
            return init(state, action)

        default:
            return state
    }
}

function init(state: ReducerTodayPray, action: ActionType): ReducerTodayPray {
    return {
        studentPray: [],
        ads: [],
        todayPrayContent: []
    }
}

function postAds(state: ReducerTodayPray, action: ActionType): ReducerTodayPray {
    const { ads } = action;

    return {
        ...state,
        ads
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