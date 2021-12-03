import { getToken } from '../store/index'

const api = {
    signin: (tel, code) => Promise.resolve({ data: 123456 }),
    clients: () => fetch(`http://localhost/api/clients?access_token=${getToken()}`).then(body => body.json())
}

export default api;