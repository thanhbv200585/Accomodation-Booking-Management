import 'primeicons/primeicons.css'
import { useState } from 'react'
import WriteNoti from '../dialog/writeNoti'
import { Button } from 'primereact/button'

const EachAccount = ({ data }) => {
    // console.log(data)
    const [noti, setNoti] = useState(false)
    const [userId, setUserId] = useState(0)

    const handleBtn = () =>{
        setNoti(true)
        setUserId(data.id)
        // console.log(data.id)
    }
    return (
        <>
        <WriteNoti
                visible={noti} userId={userId}
                onHide={() => setNoti(false)}
            />
            {
                data.role !== 'ADMIN' ? (
                    <div
                        className='mx-3 my-4 p-2'
                        style={{ background: "#ffffff", borderRadius: ".5rem" }}
                    >
                        <div>
                            <div
                                className='d-flex'
                            >
                                {
                                    data.role === 'CUSTOMER' ? (
                                        <i className="pi pi-user mx-3" style={{ fontSize: '2rem' }}></i>

                                    ) : (
                                        <i className="pi pi-star-fill mx-3" style={{ fontSize: '2rem' }}></i>
                                    )
                                }
                                <div>
                                    <div><b>{data.role}</b></div>
                                    <div><b>Name: </b>{data.name}</div>
                                    <div><b>Account ID: </b>{data.id}</div>
                                    <div><b>Address: </b>{data.address}</div>
                                    <div><b>Phone: </b>{data.phone}</div>
                                    {
                                        data.role === 'CUSTOMER' ? (
                                            <div><b>Score: </b>{data.score}</div>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                        className='d-flex justify-content-center'
                    >
                        <Button
                            icon='pi pi-send'
                            label="Send Notification" className="p-button-text p-button-info my-2"
                            style={{ width: "20vw" }}
                            onClick={handleBtn}
                        />
                    </div>


                    </div>
                ) : (
                    <>
                    </>
                )
            }
        </>
    )
}
export default EachAccount