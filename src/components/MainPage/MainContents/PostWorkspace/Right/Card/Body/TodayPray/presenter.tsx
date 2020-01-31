import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../../types/reducer'
import COLORS from '../../../../../../../../consts/colors'

const Container = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
`

const Label = styled.div`
    font-size:18px;
    padding-top:4px;
    width:100%;
    border-top:1px solid ${COLORS.weakGray};
`
const Text = styled.div`
    padding-left: 10px;
    padding-top: 7px;
`

const Presenter: React.FC = () => {

    const todayPrayReducer = useSelector((state: ReducerStateType) => state.todayPrayForPost.todayPrayContent)

    return <Container>
        <Label>
            오늘의 기도
        </Label>
        {todayPrayReducer.map((todayPrayContent, i) => {
            return <Text key={i}>
                {todayPrayContent}
            </Text>
        })}
    </Container>
}

export default Presenter