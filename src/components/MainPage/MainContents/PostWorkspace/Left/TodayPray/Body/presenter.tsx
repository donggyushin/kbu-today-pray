import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`

const Text = styled.div`
    padding-left:7px;
    margin-top:7px;
`

interface IProps {
    prays: string[]
}



const Presenter: React.FC<IProps> = ({
    prays
}) => {
    return <Container id="todaypraybody">
        {prays.map((pray, i) => {
            return <Text key={i}>
                {pray}
            </Text>
        })}
    </Container>
}

export default Presenter