import React, { useRef, useEffect, useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import ShadowBoxType from '../../consts/shadowbox'
import { close, ICloseDispatch } from '../../actions/todayPrayDetail'
import { loadingOn, ILoadingDispatch, loadingOff } from '../../actions/loading'
import { dialogOn, IDialogInDispatch } from '../../actions/dialog'
import { ReducerTodayPrayForViewPraysType, ReducerStateType } from '../../types/reducer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { DONGGYU_ENDPOINT } from '../../consts/endPoint'

const Container = styled.div`
    display:flex;
    position:absolute;
    top:0;
    left:0;
    justify-content: flex-end;
    background:rgba(0,0,0,0.5);
    width:100%;
    height:100%;
`

const FromBottomToTop = keyframes`
    from {
        left:550px;
    }to {
        left:0;
    }
`

const FromTopToBottom = keyframes`
    from {
        left:0;
    }to {
        left:550px;
    }
`

const Card = styled.div`
    width:550px;
    height:100%;
    background:white;
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    position: relative;
    animation:${FromBottomToTop} 0.4s;
`

const DisappearingCard = styled.div`
    width:550px;
    height:100%;
    background:white;
    border-radius:4px;
    box-shadow:${ShadowBoxType.typeOne};
    position: relative;
    left:550px;
    animation:${FromTopToBottom} 0.4s;
`

const Presenter: React.FC = () => {

    const [disappearing, setDisappearing] = useState(false)
    const [prayObj, setPrayObj] = useState<ReducerTodayPrayForViewPraysType>({
        _id: "",
        ads: [],
        studentPray: [],
        todayPrayContent: [],
        writer: {
            name: "",
            _id: ""
        },
        date: new Date()
    })

    const wrappedRef = useRef(null)
    const closeDispatch = useDispatch<Dispatch<ICloseDispatch>>()
    const loadingDispatch = useDispatch<Dispatch<ILoadingDispatch>>()
    const dialogDispatch = useDispatch<Dispatch<IDialogInDispatch>>()

    const todayPrayDetailReducer = useSelector((state: ReducerStateType) => state.todayPrayDetail)


    useEffect(() => {
        callTodayPray()
    }, [])


    useOutsideAlerter(wrappedRef)

    if (disappearing) {
        return <Container>
            <DisappearingCard>
                Card detail component
            </DisappearingCard>
        </Container>
    } else {
        return <Container>
            <Card ref={wrappedRef}>
                Card detail component
        </Card>
        </Container>
    }

    function callTodayPray() {

        axios.get(`${DONGGYU_ENDPOINT}todaypray/pray/${todayPrayDetailReducer.id}`)
            .then(res => res.data)
            .then(data => {
                interface IData {
                    ok: boolean,
                    error: string,
                    pray: ReducerTodayPrayForViewPraysType
                }


                const { ok, error, pray } = data as IData
                if (ok) {
                    console.log('pray: ', pray)
                    setPrayObj(pray)
                } else {
                    dialogOn("죄송해요", error, dialogDispatch, () => {
                        window.location.href = '/'
                    })
                }
            })
            .catch(err => {

                dialogOn("죄송해요", "서버와의 통신도중 예기치 못한 에러가 발생하였어요. ", dialogDispatch, () => {
                    window.location.href = '/'
                })
            })

    }



    function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
        // Alert if clicked on outside of element
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                // 카드 닫기
                setDisappearing(true)
                setTimeout(() => {
                    close(closeDispatch)
                }, 400);
            }
        }

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        })
    }

}




export default Presenter