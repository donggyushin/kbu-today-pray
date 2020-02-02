import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../types/reducer'
import ShadowBoxType from '../../../../../../consts/shadowbox'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    margin-bottom: 20px;
    padding:8px;
    margin-top:3px;
`

const Writer = styled.div`
    font-weight: 500;
    margin-bottom: 10px;
`

const Pray = styled.div`
    margin-bottom:7px;
    display:flex;
    align-items:flex-start;
`

const PraysContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:10px;
    margin-top:5px;
`


const DotContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:7px;
    margin-top:6px;
`

const Dot = styled.div`
    width:4px;
    height:4px;
    border-radius:50%;
    background:black;
`

interface IProps {
    pray: ReducerTodayPrayStudentPrayType
}

const Presenter: React.FC<IProps> = ({
    pray
}) => {
    return <Container>
        <Writer>
            작성자: {pray.name}({pray.grade})
        </Writer>
        <PraysContainer>
            {pray.prays.map((pray, i) => {
                return <Pray key={i}>
                    <DotContainer>
                        <Dot />
                    </DotContainer>
                    {pray}
                </Pray>

            })}
        </PraysContainer>
    </Container>
}

export default Presenter