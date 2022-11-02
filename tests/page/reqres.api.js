import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    update_booking: (param) => BaseAPI.put(`/booking/${param}`)
}

export default reqresApi;