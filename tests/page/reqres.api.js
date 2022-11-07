import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth/', data),
    getBookingId:(firstname, lastname) => BaseAPI.get(`/booking${firstname && lastname ? `?firstname=${firstname}&lastname=${lastname}`: ''}`),
    getBooking: (id) => BaseAPI.get(`/booking/${id}`),
    createBooking: (data)=> BaseAPI.post('/booking', data),
    update_booking: (param) => BaseAPI.put(`/booking/${param}`),
    health_check: (data) => BaseAPI.get('/ping'),
    partialUpdateBooking: (id, data) => BaseAPI.patch(`/booking/${id}`, data),
    deleteBooking: (id) => BaseAPI.delete(`/booking/${id}`)
}

export default reqresApi;