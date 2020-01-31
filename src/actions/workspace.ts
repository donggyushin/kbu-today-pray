import { CURRENT_TYPE } from '../types/reducer'
import { WORKSPACE_PUT_CURRENT } from './types'
import { Dispatch } from 'react'

interface IPutWorkspaceCurrent {
    type: string
    newCurrent: CURRENT_TYPE
}

export const putWorkspaceCurrent = (newCurrent: CURRENT_TYPE, dispatch: Dispatch<IPutWorkspaceCurrent>) => {
    dispatch({
        type: WORKSPACE_PUT_CURRENT,
        newCurrent
    })
}