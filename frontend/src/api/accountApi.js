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
        return axiosClient.post(url, payload)
    },
    changeUserName: (id, payload) =>{
        const url = `${PREFIX}/${id}/${idHotel}/changeUsername`
        return axiosClient.post(url, data)
    },
    changePassword: (id, payload) =>{
        const url = `${PREFIX}/${id}/${idHotel}/changePassword`
        return axiosClient.post(url, data)
    }
};

export default accountApi;