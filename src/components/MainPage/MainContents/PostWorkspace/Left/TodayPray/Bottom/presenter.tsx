import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'


const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    addButtonClikced: () => void
}

const Presenter: React.FC<IProps> = ({
    addButtonClikced
}) => {
    return <Container>
        <Button onClick={addButtonClikced} variant="contained" color="primary">
            추가
</Button>
    </Container>
}

export default Presenter