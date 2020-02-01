import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayForViewPraysType } from '../../../../../../types/reducer'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import moment from 'moment'
import { open, IOpenDispatch } from '../../../../../../actions/todayPrayDetail'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    box-shadow:${ShadowBoxType.typeOne};
    display: grid;
    grid-template-rows: 20% 20% 1fr;
    cursor: pointer;
`
const TextContainer = styled.div`
    padding:7px;
    overflow:hidden;
    display:flex;
    align-items:center;
`

const Date = styled.div`
    font-weight: 800;
`

const WriterName = styled.div`
    font-weight:700;
`

const PrayContents = styled.div`
    height: 86%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.3em;
    height: 3.6em; 
    font-weight:100;
`


interface IProps {
    pray: ReducerTodayPrayForViewPraysType
}

const Presenter: React.FC<IProps> = ({
    pray
}) => {

    const openTodayPrayDetailDispatch = useDispatch<Dispatch<IOpenDispatch>>()

    return <Container onClick={clickCard}>
        <TextContainer>
            <Date>
                {
                    moment(pray.date).format('ddd, MMM do YYYY, hA')
                }
            </Date>
        </TextContainer>
        <TextContainer>
            <WriterName>
                {pray.writer.name}
            </WriterName>
        </TextContainer>
        <TextContainer style={{
            alignItems: 'flex-start'
        }}>

            {pray.todayPrayContent.map((content, i) => {
                return <PrayContents key={i}>
                    {content}
                </PrayContents>
            })}

        </TextContainer>
    </Container>


    function clickCard() {
        open(pray._id, openTodayPrayDetailDispatch)
    }

}

export default Presenter