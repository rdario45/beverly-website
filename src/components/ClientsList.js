
function ClientList (props) {
     
    return (
        <div className="Table">
            <ul>
                { props.clients.map((client, key) => 
                    <li key={key}>{client.name + client.telephone}</li>
                )}
            </ul>
        </div>
    ) 
}


export default ClientList;