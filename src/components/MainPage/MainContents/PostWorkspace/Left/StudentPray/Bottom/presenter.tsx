import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    submitButtonClicked: () => void
}

const Presenter: React.FC<IProps> = ({
    submitButtonClicked
}) => {
    return <Container>
        <Button onClick={submitButtonClicked} variant="contained" color="primary">
            추가
</Button>
    </Container>
}

export default Presenter