import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth/', data),
    getBookingId:(firstname, lastname) => BaseAPI.get(`/booking${firstname && lastname ? `?firstname=${firstname}&lastname=${lastname}`: ''}`),
    getBooking: (id) => BaseAPI.get(`/booking/${id}`),
    createBooking: (data)=> BaseAPI.post('/booking', data),
    update_booking: (id, data) => BaseAPI.put(`/booking/${id}`, data),
    health_check: (data) => BaseAPI.get('/ping', data),
    partialUpdateBooking: (id, data) => BaseAPI.patch(`/booking/${id}`, data),
    deleteBooking: (id) => BaseAPI.delete(`/booking/${id}`)
}

export default reqresApi;