// import { useReducer, useEffect } from 'react';
// import { globalReducer } from '../store'
// import ClientList from '../components/ClientsList';
// import api from '../api'

function ClientsScreen () {   
    // const [state, dispatch] = useReducer(globalReducer, { clients:[] });

    // useEffect(() => {
        // api.clients().then((data) => {
        //     dispatch({
        //         type: "clients",
        //         payload: data
        //     });
        // });
    // }, []);                                                                                                                                                  nnnnnnnnnnnnnnnn

    return (
        <div>
            {/* <ClientList clients={state.clients} /> */}
        </div>
    )
}

export default ClientsScreen;