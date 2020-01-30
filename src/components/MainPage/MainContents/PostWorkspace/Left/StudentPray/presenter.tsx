import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'
import ShadowBoxType from '../../../../../../consts/shadowbox'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../types/reducer'
import { postStudentPray } from '../../../../../../actions/todayPrayForPost'
import { useDispatch } from 'react-redux'

const Container = styled.div`
width:100%;
height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Card = styled.div`
    display: grid;
    grid-template-rows: 17% 1fr 14%;
    width:88%;
    height:80%;
    padding:7px;
    box-shadow:${ShadowBoxType.typeOne};
    background:white;
    border-radius:4px;
`

interface IPostStudentPrayDispatch {
    type: string
    studentPray: ReducerTodayPrayStudentPrayType
}


const Presenter: React.FC = () => {

    const [pray, setPray] = useState("")
    const postStudentPrayDispatch = useDispatch<Dispatch<IPostStudentPrayDispatch>>()

    const [studentPray, setStudentPray] = useState<ReducerTodayPrayStudentPrayType>({
        name: "",
        grade: 1,
        prays: []
    })

    return <Container>
        <Card>
            <Header
                studentPray={studentPray}
                handleStudentName={handleStudentName}
                handleStudentGrade={handleStudentGrade}
            />
            <Body
                pray={pray}
                handlePray={handlePray}
                studentPray={studentPray}
                prayOnEnterKeyDown={prayOnEnterKeyDown}
            />
            <Bottom submitButtonClicked={submitButtonClicked} />
        </Card>
    </Container>

    function submitButtonClicked() {
        postStudentPray(studentPray, postStudentPrayDispatch)
        setStudentPray({
            name: "",
            grade: 1,
            prays: []
        })
        setPray("")
    }

    function handleStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentPray({
            ...studentPray,
            name: event.target.value
        })
    }

    function handleStudentGrade(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentPray({
            ...studentPray,
            grade: parseInt(event.target.value)
        })
    }

    function handlePray(event: React.ChangeEvent<HTMLInputElement>) {
        setPray(event.target.value)
    }

    function prayOnEnterKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            appendStudentPray(pray)
            setPray("")
        }
    }

    function appendStudentPray(newPray: string) {
        setStudentPray({
            ...studentPray,
            prays: [
                ...studentPray.prays,
                newPray
            ]
        })
    }


}

export default Presenter