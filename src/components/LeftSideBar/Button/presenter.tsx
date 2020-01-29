import React, { useState, useEffect, Dispatch } from 'react'
import styled from 'styled-components'
import { CURRENT_TYPE, ReducerStateType } from '../../../types/reducer'
import { useSelector, useDispatch } from 'react-redux'
import COLORS from '../../../consts/colors'
import { putWorkspaceCurrent } from '../../../actions/workspace'

interface IContainer {
    activated: boolean
}

const Container = styled.div`
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    background:${COLORS.electronBlue};
    opacity:${(props: IContainer) => props.activated ? 1 : 0.5};
    font-weight:${(props: IContainer) => props.activated ? 600 : 300};
    transition:0.5s;
`

interface IWorkspaceDispatch {
    type: string
    newCurrent: CURRENT_TYPE
}

interface IProps {
    label: string
    name: CURRENT_TYPE
}

const Presenter: React.FC<IProps> = ({
    label,
    name
}) => {
    const [activated, setActivated] = useState(false)
    const workspaceReducer = useSelector((state: ReducerStateType) => state.workspace)
    const workspaceDispatch = useDispatch<Dispatch<IWorkspaceDispatch>>()
    const currentWorkspace = workspaceReducer.current
    useEffect(() => {
        if (name === currentWorkspace) {
            setActivated(true)
        } else {
            setActivated(false)
        }
    }, [currentWorkspace])
    return <Container onClick={onButtonClick} activated={activated}>
        {label}
    </Container>

    function onButtonClick() {
        putWorkspaceCurrent(name, workspaceDispatch)
    }
}

export default Presenter