const api = {
    signin: (tel, code) => Promise.resolve({ data: 123456 }),
    clients: (access_token) => fetch(`http://localhost/api/clients?access_token=${access_token}`).then(body => body.json()),
}

export default api