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
    pray: string
    handleTodayPray: (event: React.ChangeEvent<HTMLInputElement>) => void
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Presenter: React.FC<IProps> = ({
    pray,
    handleTodayPray,
    onEnterPress
}) => {
    return <Container>
        <TextField
            style={{
                width: '100%'
            }}
            value={pray}
            onChange={handleTodayPray}
            onKeyPress={onEnterPress}
            id="standard-basic" label="오늘의 기도" />
    </Container>
}

export default Presenter