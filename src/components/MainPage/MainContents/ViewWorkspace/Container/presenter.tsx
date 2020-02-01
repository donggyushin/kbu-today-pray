import React, { useState, useEffect, Dispatch } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../../types/reducer'
import BottomScrollListener from 'react-bottom-scroll-listener';
import { getPrays, IGetPraysDispatch } from '../../../../../actions/todayPrayForView'


interface IContainer {
    gridTemplateColumns: string
}

const Container = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns:${(props: IContainer) => props.gridTemplateColumns};
    grid-auto-rows: 200px;
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    overflow-y:scroll;
`

interface IProps {
    width: number
    height: number
    page: number
}


const Presenter: React.FC<IProps> = ({
    width,
    height,
    page
}) => {

    const [gridTemplateColumn, setGridTemplateColumn] = useState("")
    const praysForViewReducer = useSelector((state: ReducerStateType) => state.todayPrayForView)
    const prays = praysForViewReducer.prays

    const getPraysDispatch = useDispatch<Dispatch<IGetPraysDispatch>>()
    const totalPraysNumber = praysForViewReducer.praysCount
    const currentPraysNumber = prays.length



    useEffect(() => {
        if (width > 1300) {
            setGridTemplateColumn("repeat(4,1fr)")
        } else if (width > 780) {
            setGridTemplateColumn("repeat(3,1fr)")
        } else if (width > 520) {
            setGridTemplateColumn("repeat(2,1fr)")
        } else {
            setGridTemplateColumn("repeat(1,1fr)")
        }
    }, [width])



    return <BottomScrollListener onBottom={containerToBottom}>
        {(scrollRef: any) => (

            <Container ref={scrollRef} id="todaypraycardcontainer" gridTemplateColumns={gridTemplateColumn}>
                {prays.map((pray, i) => {
                    return <Card pray={pray} key={i} />
                })}
            </Container>
        )}
    </BottomScrollListener>

    function containerToBottom() {
        console.log('container reached to bottom!')
        if (totalPraysNumber > currentPraysNumber) {
            getPrays(page, getPraysDispatch)
        }
    }


}

export default Presenter