import { useEffect } from 'react';
import API from "../../api/ApiController";

const useLoadBalance = (selectedDate, dispatch) => {
    useEffect(() => {
        const calcWeekPeriod = (selectedDate) => {
            const startDate = new Date(selectedDate.toDateString());
            startDate.setDate(startDate.getDate() - selectedDate.getDay());
            const finalDate = new Date(startDate.toDateString());
            finalDate.setDate(startDate.getDate() + 6);
            return [startDate, finalDate];
        }
        const [startDate, finalDate] = calcWeekPeriod(selectedDate);

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