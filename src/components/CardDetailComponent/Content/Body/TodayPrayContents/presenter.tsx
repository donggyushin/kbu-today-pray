import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../../../consts/colors'

const Container = styled.div`
    margin-bottom:20px;
`

const Label = styled.div`
    font-weight:600;
    margin-bottom:10px;
    padding-bottom:5px;
    border-bottom:1px solid ${COLORS.weakGray};
`

const PraysContainer = styled.div`
    padding-left:10px;
`

const Pray = styled.div`
    margin-bottom:7px;
    display:flex;
    align-items:flex-start;
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
    prays: string[]
}

const Presenter: React.FC<IProps> = ({
    prays
}) => {
    return <Container>
        <Label>
            오늘의 말씀
        </Label>
        <PraysContainer>
            {prays.map((pray, i) => {
                return <Pray key={i}>
                    <DotContainer>
                        <Dot />
                    </DotContainer> {pray}
                </Pray>

            })}
        </PraysContainer>
    </Container>
}

export default Presenter