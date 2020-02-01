import React, { Dispatch, useState, useEffect } from 'react'
import styled from 'styled-components'
import { getPrays, IGetPraysDispatch, initPrays, IInitPrays } from '../../../../actions/todayPrayForView'
import { useDispatch } from 'react-redux'
import CardsContainer from './Container'
import ReactResizeDetector from 'react-resize-detector';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 92%;
`

const Presenter: React.FC = () => {

    const [page, setPage] = useState(1)

    const getPraysDispatch = useDispatch<Dispatch<IGetPraysDispatch>>()

    const initDispatch = useDispatch<Dispatch<IInitPrays>>()

    useEffect(() => {
        initPraysFunc()
        callPrays()
    }, [])

    interface IreactResizeDetectorObject {
        width: number
        height: number
    }

    return <Container>
        <ReactResizeDetector handleWidth handleHeight>
            {({ width, height }: IreactResizeDetectorObject) => <CardsContainer page={page} width={width} height={height} />}
        </ReactResizeDetector>

    </Container>

    function initPraysFunc() {
        initPrays(initDispatch)
    }

    function callPrays() {
        getPrays(page, getPraysDispatch)
        setPage(page + 1)
    }
}

export default Presenter