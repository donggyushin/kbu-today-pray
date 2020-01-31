import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    addButtonClicked: () => void
}

const Presenter: React.FC<IProps> = ({ addButtonClicked }) => {
    return <Container>
        <Button onClick={addButtonClicked} variant="contained" color="primary">
            추가
</Button>
    </Container>
}

export default Presenter