import { useEffect } from 'react';
import { findBalancePie } from "../../api/ApiController";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";

const useLoadChartPieffect = ({ selectedDate, accessToken, pie, dispatch }) => {
    const isAccessTokenAvaileble = !!accessToken;
    useEffect(() => {
        const today = new Date(selectedDate.toDateString());
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        if (isAccessTokenAvaileble) {
            withHttpWrapper(
                findBalancePie(
                    [new Date(startDate.toDateString()).getTime().toString(),
                    new Date(finalDate.toDateString()).getTime().toString(),
                        accessToken]
                ),
                (body) => {
                    const data = [];
                    let sum = 0;

                    for (const [key, value] of Object.entries(body.data)) {
                        data.push(value[0]);
                        sum = sum + value[1];
                    }
                    
                    const labels = Object.keys(body.data);
                    const dataset = Object.assign(pie.datasets[0], {data})
                    labels.push("BEVERLYSPA");
                    data.push(sum)

                    dispatch({
                        type: "pie",
                        payload: Object.assign({}, {
                            ...pie, labels,
                            datasets: [ dataset ]
                        })
                    });
                },
                (response) => {
                    dispatch({
                        type: "error",
                        payload: response.status + " - " + response.statusText
                    });
                },
                dispatch)
        }
    }, [selectedDate]);
}


export default useLoadChartPieffect;

// const useLoadBalanceEffect = (selectedDate, dispatch, pie, bar) => {
//     useEffect(() => {
//         const [startDate, finalDate] = ((selectedDate) => {
//             const today = new Date(selectedDate.toDateString());
//             const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
//             const finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//             return [startDate, finalDate];
//         })(selectedDate);
//         API.findBalance(
//             new Date(startDate.toDateString()).getTime().toString(),
//             new Date(finalDate.toDateString()).getTime().toString()
//         ).then((body) => {);
//         /// other
//         API.findBalanceDaily(
//             new Date(startDate.toDateString()).getTime().toString(),
//             new Date(finalDate.toDateString()).getTime().toString()
//         ).then((body) => {
//             const buildDS = (datasets, data) => {
//                 return datasets.map(obj => {
//                     obj.data = data;
//                     return obj;
//                 })
//             }
//             const newASA = {
//                 ...bar.data,
//                 labels: body.data.labels,
//                 datasets: buildDS(bar.data.datasets, body.data.data),
//             }
//             dispatch({
//                 type: "bar",
//                 payload: Object.assign({}, {
//                     ...bar,
//                     data: newASA,
//                 })
//             });
//         });
//     }, [selectedDate]);
// }

