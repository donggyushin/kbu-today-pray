import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
`

const Text = styled.div`
    font-weight:600;
`

interface IProps {
    date: string
}



const Presenter: React.FC<IProps> = ({
    date
}) => {
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    return <Container>
        <Text>
            {year}년 {month}월 {day}일에 작성된 기도문입니다.
        </Text>
    </Container>
}

export default Presenter