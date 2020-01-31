import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../../types/reducer'
import COLORS from '../../../../../../../../consts/colors'

const Container = styled.div`
    margin-top:20px;
`

const Label = styled.div`
    font-size:18px;
    padding-top:4px;
    width:100%;
    border-top:1px solid ${COLORS.weakGray};
`

const Text = styled.div`
    padding-left:10px;
    padding-top:7px;
`

const Presenter: React.FC = () => {

    const AdsReducer = useSelector((state: ReducerStateType) => state.todayPrayForPost.ads)


    return <Container>
        <Label>광고</Label>
        {AdsReducer.map((ad, i) => {
            return <Text key={i}>
                {ad}
            </Text>
        })}
    </Container>
}

export default Presenter