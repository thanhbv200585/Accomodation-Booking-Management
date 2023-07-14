import axiosClient from "./axiosClient";

const PREFIX = "/owner";

const ownerApi = {
    //create new hotel
    newHotel: (id, data) => {
        const url = `${PREFIX}/${id}/newHotel`;
        return axiosClient.post(url, data);
    },

    listHotel: (id, pageNumber, pageSize) =>{
        const url = `${PREFIX}/${id}/allHotel?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=assess`
        return axiosClient.get(url)
    },
    //localhost:8082/api/owner/{idAccount}/{idHotel}/updateHotel
    updateHotel: (id, hotelId, payload) =>{
        const url = `${PREFIX}/${id}/${hotelId}/updateHotel`
        return axiosClient.put(url, payload)
    },
    createRoom: (id, idHotel, data) =>{
        const url = `${PREFIX}/${id}/${idHotel}/new_room`
        return axiosClient.post(url, data)
    },
    getAllBooking: (id, idHotel) =>{
        const url = `${PREFIX}/${id}/${idHotel}/getAllBooking`
        return axiosClient.get(url)
    },
    hotelDetail: (id, idHotel) =>{
        const url = `${PREFIX}/${id}/${idHotel}/detail`
        return axiosClient.get(url)
    },
    // localhost:8082/api/owner/{idAccount}/{idHotel}/cancelBooking?idBooking=21&reason=sada
    cancelBooking:(id, hotelId, bookingId, reason)=>{
        const url = `${PREFIX}/${id}/${hotelId}/cancelBooking)?idBooking=${bookingId}&reason=${reason}`
        return axiosClient.delete(url)
    }
};

export default ownerApi;