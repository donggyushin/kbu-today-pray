import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Text = styled.div`
    font-weight:600;
`

interface IProps {
    writerName: string
}

const Presenter: React.FC<IProps> = ({
    writerName
}) => {
    return <Container>
        <Text>
            작성자 {writerName}
        </Text>
    </Container>
}

export default Presenter