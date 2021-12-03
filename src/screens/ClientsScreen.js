import { useReducer, useEffect } from 'react';
import ClientList from '../components/ClientsList';
import { reducer } from '../store'
import api from '../api'

const initialState = { clients:[] };

function ClientsScreen () {   
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        api.clients().then((data) => {
            dispatch({
                type: "clients",
                payload: data
            });
        });
    }, []);

    return (
        <div>
            <ClientList clients={state.clients} />
        </div>
    )
}

export default ClientsScreen;