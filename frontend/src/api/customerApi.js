import axiosClient from "./axiosClient";

const PREFIX = "/customer";

const customerApi = {
    //create new hotel
    newHotel: (id, data) => {
        const url = `${PREFIX}/${id}/newHotel`;
        return axiosClient.post(url, data);
    },

    listHotel: (id) =>{
        const url = `${PREFIX}/${id}/allHotel?pageNumber=0&pageSize=2&sortBy=assess`
        return axiosClient.get(url)
    },
    createBooking: (id, data) =>{
        const url = `${PREFIX}/${id}/booking/new`
        return axiosClient.post(url, data)
    },
    viewAllBooking: (id) =>{
        const url = `${PREFIX}/${id}/booking/all`
        return axiosClient.get(url)
    },
    cancelBookingByCustomer: (accountId, bookingId, reason) => {
        const url = `${PREFIX}/${accountId}/${bookingId}/cancelBooking?reason=${reason}`;
        return axiosClient.delete(url)
    }  
};

export default customerApi;