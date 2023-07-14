import axiosClient from "./axiosClient";

const PREFIX = "/admin";

const adminApi = {
    //create new hotel
    sendNoti: (id,idUser, message) => {
        const url = `${PREFIX}/${id}/sendNoti?idUser=${idUser}&message=${message}`;
        return axiosClient.post(url, message);
    },
    allAccount: (id) =>{
        const url = `${PREFIX}/${id}/allAccount`
        return axiosClient.get(url)
    }
};  

export default adminApi;