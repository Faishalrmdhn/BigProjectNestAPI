import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth/', data),
    getBookingId:(firstname, lastname) => BaseAPI.get(`/booking${firstname && lastname ? `?firstname=${firstname}&lastname=${lastname}`: ''}`),
    getBooking: (id) => BaseAPI.get(`/booking/${id}`),
    createBooking: (data)=> BaseAPI.post('/booking', data),
    partialUpdateBooking: (id, data) => BaseAPI.patch(`/booking/${id}`, data)
}

export default reqresApi;