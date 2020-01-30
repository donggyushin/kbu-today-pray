import React from 'react'
import styled from 'styled-components'
import NavigationToggleButton from './NavigationToggleButton'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../types/reducer'
import PostWorkspace from './PostWorkspace'
import ViewWorkspace from './ViewWorkspace'
import COLORS from '../../../consts/colors'

const Container = styled.div`
    width:100%;
    position:relative;
    background:${COLORS.almostWhite};
`

const Presenter: React.FC = () => {

    const workspaceReducer = useSelector((state: ReducerStateType) => state.workspace)
    const workspaceCurrent = workspaceReducer.current

    return <Container>
        {workspaceCurrent === "POST" && <PostWorkspace />}
        {workspaceCurrent === "VIEW" && <ViewWorkspace />}
        <NavigationToggleButton />
    </Container>
}

export default Presenter