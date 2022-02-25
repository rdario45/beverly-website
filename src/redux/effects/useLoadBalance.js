import { useEffect } from 'react';
import API from "../../api/ApiController";

const useLoadBalance = (selectedDate, dispatch) => {
    useEffect(() => {
        const [startDate, finalDate] = ((selectedDate) => {
            const today = new Date(selectedDate.toDateString());
            const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            const finalDate = new Date(today.getFullYear(), today.getMonth()+1, 0);
            return [startDate, finalDate];
        })(selectedDate);

        API.findBalance(
            new Date(startDate.toDateString()).getTime().toString(),
            new Date(finalDate.toDateString()).getTime().toString()
        ).then((body) => {
            dispatch({
                type: "balance",
                payload: body.data
            });
        });
    }, [selectedDate]);
}

export default useLoadBalance;