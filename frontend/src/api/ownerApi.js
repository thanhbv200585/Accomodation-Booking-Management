import axiosClient from "./axiosClient";

const PREFIX = "/owner";

const ownerApi = {
    //create new hotel
    newHotel: (id, data) => {
        const url = `${PREFIX}/${id}/newHotel`;
        return axiosClient.post(url, data);
    },

    listHotel: (id) =>{
        const url = `${PREFIX}/${id}/allHotel?pageNumber=0&pageSize=2&sortBy=assess`
        return axiosClient.get(url)
    },
    createRoom: (id, idHotel, data) =>{
        const url = `${PREFIX}/${id}/${idHotel}/new_room`
        return axiosClient.post(url, data)
    }
};

export default ownerApi;