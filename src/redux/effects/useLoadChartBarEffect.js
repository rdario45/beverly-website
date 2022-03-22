import { useEffect } from 'react';
import { findBalanceBar } from "../../api/ApiController";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";

const useLoadBalanceEffect = ({ selectedDate, dispatch, pie, bar, accessToken }) => {
    useEffect(() => {
        const today = new Date(selectedDate.toDateString());
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        withHttpWrapper(
            findBalanceBar(
                [new Date(startDate.toDateString()).getTime().toString(),
                new Date(finalDate.toDateString()).getTime().toString(),
                    accessToken]
            ), (body) => {
                let data = [];
                let labels = [];
                const week = [
                    "LUNES",
                    "MARTES",
                    "MIERCOLES",
                    "JUEVES",
                    "VIERNES",
                    "SABADO"]

                    week.forEach(day => {
                        data.push(body.data[day]);
                        labels.push(day);
                    });

                    const dataset = Object.assign(bar.data.datasets[0], { data })
                dispatch({
                    type: "bar",
                    payload: Object.assign({}, {
                        ...bar, 
                        data: {
                            ...bar.data,
                            labels,
                            datasets: [dataset]
                        }
                    })
                });
            }, (response) => { },
            dispatch);
    }, [selectedDate]);
}

export default useLoadBalanceEffect;