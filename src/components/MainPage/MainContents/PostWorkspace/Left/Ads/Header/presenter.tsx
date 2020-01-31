import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    ad: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<IProps> = ({
    ad,
    handleInput,
    handleKeyPress
}) => {
    return <Container>
        <TextField
            style={{
                width: '100%'
            }}
            value={ad}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            id="standard-basic" label="광고" />
    </Container>
}

export default Presenter