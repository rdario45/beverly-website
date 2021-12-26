
function Session({ user, logout }) {
    return(
        <div>
            <div>{user.name}</div>
            <div>{user.phone}</div>
            <button onClick={logout}>logout</button>
        </div>
    )
}

export default Session;