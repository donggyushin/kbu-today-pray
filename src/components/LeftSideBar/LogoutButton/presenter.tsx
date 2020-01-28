import React, { Dispatch } from 'react'
import styled from 'styled-components'
import ShadowBoxType from '../../../consts/shadowbox'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../../actions/user'

const Container = styled.div`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 110px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:${ShadowBoxType.typeTwo};
    cursor: pointer;
    font-size:20px;
`

interface IUserLogoutDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const userLogoutDispatch = useDispatch<Dispatch<IUserLogoutDispatch>>()

    return <Container onClick={logoutButtonClicked}>
        LOGOUT
    </Container>

    function logoutButtonClicked() {
        userLogout(userLogoutDispatch)
    }
}

export default Presenter