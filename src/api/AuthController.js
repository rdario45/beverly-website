const send = (args) => {
    const [phone] = args;
    return fetch(`${process.env.REACT_APP_API}/auth/send/${phone}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
}

const signin = (args) => {
    const [phone, code] = args;
    return fetch(`${process.env.REACT_APP_API}/auth/signin/${phone}/${code}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
}

export { signin, send };