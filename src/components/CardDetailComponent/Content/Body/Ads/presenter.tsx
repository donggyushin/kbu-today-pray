import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../../../consts/colors'

const Container = styled.div``

const Label = styled.div`
    font-weight:600;
    padding-bottom:5px;
    border-bottom:1px solid ${COLORS.weakGray};
    margin-bottom:10px;
`

const AdsContainer = styled.div`
    padding-left:10px;
`

const Ad = styled.div`
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
    ads: string[]
}

const Presenter: React.FC<IProps> = ({
    ads
}) => {
    return <Container>
        <Label>
            광고
        </Label>
        <AdsContainer>
            {ads.map((ad, i) => {
                return <Ad key={i}>
                    <DotContainer><Dot /></DotContainer>{ad}
                </Ad>
            })}
        </AdsContainer>
    </Container>
}

export default Presenter