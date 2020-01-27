import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'


const Container = styled.div`
    display: grid;
    grid-template-rows: repeat(3,1fr);
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
interface IProps {
    email: string
    password: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<IProps> = ({
    email,
    password,
    handleInput
}) => {


    return <Container>
        <Row>
            <TextField
                onChange={handleInput}
                value={email}
                name="email" style={{ width: "80%" }} id="outlined-basic" label="아이디 혹은 이메일입력" variant="outlined" />
        </Row>
        <Row>
            <TextField
                value={password}
                onChange={handleInput}
                name="password" style={{ width: "80%" }} type="password" id="outlined-basic" label="비밀번호 입력" variant="outlined" />
        </Row>
        <Row />
    </Container>


}

export default Presenter