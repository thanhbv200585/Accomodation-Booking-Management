import 'primeicons/primeicons.css'


const EachAccount = ({ data }) => {
    // console.log(data)
    return (
        <>
            {
                data.role !== 'ADMIN' ? (
                    <div
                        className='mx-3 my-4 p-2'
                        style={{ background: "#ffffff", borderRadius:".5rem" }}
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
                                    <div><b>Address: </b>{data.address}</div>
                                    <div><b>Phone: </b>{data.phone}</div>
                                    {
                                        data.role === 'CUSTOMER' ? (
                                            <div><b>Score: </b>{data.score}</div>
                                        ):(
                                            <></>
                                        )
                                    }
                                </div>
                            </div>
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