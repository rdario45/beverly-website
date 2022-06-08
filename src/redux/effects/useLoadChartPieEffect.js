import { useEffect } from 'react';
import { findChartPie } from "../../api/ApiController";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";

const useLoadChartPieffect = ({ selectedDate, accessToken, pie, dispatch }) => {

    const isAccessTokenAvaileble = !!accessToken;

    useEffect(() => {
        const today = new Date(selectedDate.toDateString());

        let startDate
        let finalDate

        const fifth = new Date(today.getFullYear(), today.getMonth(), 15);

        if (today < fifth) {
            startDate = new Date(today.getFullYear(), today.getMonth() - 1, 15);
            finalDate = Object.assign(fifth);
        } else {
            startDate = Object.assign(fifth);
            finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 15);
        }

        if (isAccessTokenAvaileble) {
            withHttpWrapper(
                findChartPie(
                    [new Date(startDate.toDateString()).getTime().toString(),
                    new Date(finalDate.toDateString()).getTime().toString(),
                        accessToken]
                ),
                (body) => {
                    const data = [];
                    let sum = 0;
                    let total = 0;

                    for (const [key, value] of Object.entries(body.data)) {
                        data.push(value[0]);
                        sum = sum + value[1];
                        total = total + value[1];
                    }

                    const labels = Object.keys(body.data);
                    const dataset = Object.assign(pie.datasets[0], { data });
                    labels.push("BEVERLYSPA");
                    data.push(sum)

                    dispatch({
                        type: "pie",
                        payload: Object.assign({}, {
                            ...pie, labels,
                            datasets: [dataset]
                        })
                    });

                    dispatch({
                        type: "total",
                        payload: total + sum
                    });

                },
                (response) => { }, dispatch)
        }
    }, [selectedDate]);
}


export default useLoadChartPieffect;