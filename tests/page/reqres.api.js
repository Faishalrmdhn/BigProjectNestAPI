import BaseAPI from "$root/page/base.api";

const reqresApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    partialUpdate: (data) => BaseAPI.patch('/booking/{844}', data)
}

export default reqresApi;