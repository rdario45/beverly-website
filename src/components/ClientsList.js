
function ClientList({ clients }) {

	return (
		<div className="Table">
			<ul>
				{
					clients.map((client, key) =>
						<li key={key}>{client.name + client.telephone}</li>)
				}
			</ul>
		</div>
	)
}


export default ClientList;