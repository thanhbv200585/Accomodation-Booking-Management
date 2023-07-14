
import 'primeicons/primeicons.css';
import accountApi from '../api/accountApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import adminApi from '../api/adminApi';
import EachAccount from '../components/account/EachAccount';
import EditInfoForm from '../components/dialog/EditInfoForm';
import { Button } from 'primereact/button';
import WriteNoti from '../components/dialog/writeNoti';
const Admin = () => {
    const [info, setInfo] = useState({})
    const [accounts, setAccount] = useState([])
    const { id } = useParams()
    const [editing, setEditing] = useState(false)
    const [noti, setNoti] = useState(false)
    useEffect(() => {
        const getInfo = async () => {
            try {
                const res = await accountApi.infor(id)
                setInfo(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getInfo()
    }, [])

    useEffect(() => {
        const getAccount = async () => {
            try {
                const res = await adminApi.allAccount(id)
                // console.log(res)
                setAccount(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAccount()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('user')
        localStorage.removeItem('username')
        window.location.href = '/login';
    }
    console.log(accounts)
    if (!info && !accounts)
        return (
            <>
                Loading....
            </>
        )
    return (
        <div className="d-flex">
            <EditInfoForm
                visible={editing}
                onHide={() => setEditing(false)}
            />
            <WriteNoti
                visible={noti}
                onHide={() => setNoti(false)}
            />
            {/* sidebar */}
            <div
                className='d-flex flex-column align-items-center'
                style={{ width: "25%", height: "100vh", background: "#ffffff", overflowY: "auto" }}
            >
                <div
                    className='m-2 px-2 d-flex align-items-center justify-content-center'
                    style={{ width: "90%", background: "#e8dfed" }}

                >
                    <div
                        className='m-2'
                        style={{ color: "#c714db" }}
                    >
                        <i className="pi pi-prime" style={{ fontSize: '1.4rem' }}></i>
                    </div>
                    <div className=''
                        style={{ color: "#132075" }}
                    >
                        Administration
                    </div>
                </div>
                <div
                    className='mt-3'
                    style={{ width: "90%", height: "50vh", background: "#e8dfed" }}
                >
                    <div className='d-flex align-items-center'>
                        <div>
                            <i
                                className="pi pi-verified m-3" style={{ fontSize: '3rem' }}
                            >
                            </i>
                        </div>
                        <div style={{ fontSize: "0.8rem" }}>
                            Admin:<br></br>
                            <b
                                style={{ fontSize: "1rem", cursor: "pointer" }}
                                onClick={() => setEditing(true)}
                            >
                                {info.name}
                            </b>
                        </div>

                    </div>
                    <div className='d-flex align-items-center'>
                        <div>
                            <i className="pi pi-phone mx-3" style={{ 'fontSize': '1rem' }}></i>
                        </div>
                        <div className='mx-2'>
                            {info.phone}
                        </div>
                    </div>
                    <div className='d-flex '>
                        <div>
                            <i className="pi pi-tags mx-3" style={{ 'fontSize': '1rem' }}></i>
                        </div>
                        <div className='mx-2'>
                            {info.address}
                        </div>
                    </div>
                    <div
                        className='d-flex justify-content-center'
                    >
                        <Button
                            icon='pi pi-send'
                            label="Send Notification" className="p-button-text p-button-info my-2"
                            style={{ width: "20vw" }}
                            onClick={() => setNoti(true)}
                        />
                    </div>
                </div>
                <div>
                    <Button
                        icon='pi pi-sign-out'
                        label="Log out" className="p-button-text p-button-info my-2"
                        style={{ width: "20vw" }}
                        onClick={handleLogout}
                    />
                </div>
            </div>

            {/* main */}
            <div
                style={{ width: "75%", height: "100vh", background: "purple", overflowY: "auto" }}
            >
                <div className='text-center my-3'>
                    <b
                        className='m-2 p-2'
                        style={{ background: "#ffffff", borderRadius: ".2rem" }}
                    >CUSTOMERS AND MANAGERS</b>
                </div>
                {
                    accounts.map((account, index) => (
                        <EachAccount
                            key={index}
                            data={account}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Admin