import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    update_booking: (param) => BaseAPI.put(`/booking/${param}`),
    health_check: (data) => BaseAPI.get('/ping')
}

export default reqresApi;