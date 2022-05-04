import { useEffect } from 'react';
import { findChartBar } from "../../api/ApiController";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";

const useLoadBalanceEffect = ({ selectedDate, dispatch, pie, bar, accessToken }) => {
    const week = [
        "LUNES",
        "MARTES",
        "MIERCOLES",
        "JUEVES",
        "VIERNES",
        "SABADO"]

    useEffect(() => {
        const today = new Date(selectedDate.toDateString());
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        const isAccessTokenAvaileble = !!accessToken;

        if (isAccessTokenAvaileble) {

            withHttpWrapper(
                findChartBar(
                    [new Date(startDate.toDateString()).getTime().toString(),
                    new Date(finalDate.toDateString()).getTime().toString(),
                        accessToken]
                ), (body) => {
                    let data = [];
                    let labels = [];

                    week.forEach(day => {
                        data.push(body.data[day]);
                        labels.push(day);
                    });

                    const dataset = Object.assign(bar.data.datasets[0], { data });

                    const newBarChart = {
                        ...bar,
                        data: {
                            ...bar.data,
                            labels,
                            datasets: [dataset]
                        }
                    }

                    dispatch({
                        type: "bar",
                        payload: Object.assign({}, newBarChart)
                    });

                }, (response) => { }, dispatch);
        }

    }, [selectedDate]);
}

export default useLoadBalanceEffect;