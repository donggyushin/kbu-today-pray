import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../../../../types/reducer'
import ShadowBoxType from '../../../../../../../../../consts/shadowbox'
import { deleteStudentPray } from '../../../../../../../../../actions/todayPrayForPost'
import { useDispatch } from 'react-redux'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

interface IProps {
    index: number
    studentPray: ReducerTodayPrayStudentPrayType
}

const Card = styled.div`
    width: 90%;
    height: 90%;
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    border-radius:4px;
    padding:7px;
    margin-top:7px;
    position:relative;
`

const DeleteButton = styled.i`
    position:absolute;
    right:10px;
    top:5px;
    font-size:20px;
    padding:4px;
    cursor: pointer;
`

const Name = styled.div`
    font-size: 18px;
`

const PraysContainer = styled.div``

const Pray = styled.div`
    padding-left: 20px;
    margin-top: 7px;
`

interface IDeleteStudentPrayDispatch {
    type: string
    index: number
}

const Presenter: React.FC<IProps> = ({
    studentPray,
    index
}) => {

    const deleteStudentPrayDispatch = useDispatch<Dispatch<IDeleteStudentPrayDispatch>>()


    return <Container>
        <Card>
            <Name>{studentPray.name} {studentPray.grade}학년</Name>
            <PraysContainer>
                {studentPray.prays.map((pray, i) => {
                    return <Pray key={i}>{pray}</Pray>
                })}
            </PraysContainer>
            <DeleteButton onClick={trashButtonClicked} className="fas fa-trash-alt" />
        </Card>
    </Container>

    function trashButtonClicked() {
        deleteStudentPray(index, deleteStudentPrayDispatch)
    }
}

export default Presenter