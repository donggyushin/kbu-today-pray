import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
`

const Cell = styled.div`
    padding-top:7px;
    padding-left:7px;
`

interface IProps {
    ads: string[]
}


const Presenter: React.FC<IProps> = ({
    ads
}) => {
    return <Container id="adsBodyCellContainer">
        {ads.map((ad, i) => {
            return <Cell key={i}>{ad}</Cell>
        })}
    </Container>
}

export default Presenter