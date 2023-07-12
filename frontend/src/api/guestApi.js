import axiosClient from "./axiosClient";

const PREFIX = "/guest";

const guestApi = {
    //register
    register: () => {
        const url = `${PREFIX}/register`;
        return axiosClient.post(url);
    },
    //authenticate
    authenticate: () =>{
        const url = `${PREFIX}/authenticate`
        return axiosClient.post(url)
    },
    //refreshToken
    refreshToken: () =>{
        const url = `${PREFIX}/refreshToken`
        return axiosClient.get(url)
    },
    //viewHotel
    viewHotel:()=>{
        const url = `${PREFIX}/hotels`
        return axiosClient.get(url)
    },
    //view hotel detail
    viewHotelDetail:(id)=>{
        const url = `${PREFIX}/hotels/${id}/detail`
        return axiosClient.get(url)
    },
    viewHotelDetailpost:(id) =>{
        const url = `${PREFIX}/hotels/${id}/detail`
        return axiosClient.post(url, {
            checkIn: "2023-06-27",
            checkOut: "2023-06-28"
          })
    }
};

export default guestApi;