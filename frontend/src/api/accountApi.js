import axiosClient from "./axiosClient";

const PREFIX = "/account";

const accountApi = {
    //create new hotel
    infor: (id) => {
        const url = `${PREFIX}/${id}/info`;
        return axiosClient.get(url);
    },
    // update information(name, address, phone)
    update: (id, payload) =>{
        const url = `${PREFIX}/${id}/update`
        return axiosClient.put(url, payload)
    },
    changeUserName: (id, idHotel, payload) =>{
        const url = `${PREFIX}/${id}/${idHotel}/changeUsername`
        return axiosClient.post(url, payload)
    },
    changePassword: (id, idHotel, payload) =>{
        const url = `${PREFIX}/${id}/${idHotel}/changePassword`
        return axiosClient.post(url, payload)
    },
    getNoti: (id) => {
        const url = `${PREFIX}/${id}/noti`
        return axiosClient.get(url)
    }
};  

export default accountApi;