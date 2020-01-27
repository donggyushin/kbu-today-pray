import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../../consts/shadowbox'
import Header from './Header'
import Body from './Body'
import Bottom from './Bottom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../../../actions/user'

const Container = styled.div`
    box-shadow: ${ShadowBoxType.typeOne};
    width:430px;
    height:90%;
    display: grid;
    grid-template-rows: 30% 1fr 20%;
`

interface IUserLoginDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const userLoginDispatch = useDispatch<Dispatch<IUserLoginDispatch>>()

    return <Container>
        <Header />
        <Body
            handleInput={handleInput}
            email={email}
            password={password}
        />
        <Bottom
            loginButtonClicked={loginButtonClicked}
        />
    </Container>

    function loginButtonClicked() {
        userLogin(email, password, userLoginDispatch)
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
            default:
                break;
        }
    }

}

export default Presenter