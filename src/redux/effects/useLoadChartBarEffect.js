import { useEffect } from 'react';
import { findBalance } from "../../api/ApiController";
import { withHttpWrapper } from "../../api/HttpAuthWrapper";

const useLoadBalanceEffect = ({ selectedDate, dispatch, pie, bar, accessToken} ) => {
    useEffect(() => {
        const today = new Date(selectedDate.toDateString());
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const finalDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        withHttpWrapper(findBalance(
            [new Date(startDate.toDateString()).getTime().toString(),
            new Date(finalDate.toDateString()).getTime().toString(),
        accessToken]
        ), (body) => {
                const buildDS = (datasets, data) => {
                    return datasets.map(obj => {
                        obj.data = data;
                        return obj;
                    })
                }
                // dispatch({
                //     type: "pie",
                //     payload: Object.assign({}, {
                //         ...pie, labels: body.data.labels,
                //         datasets: buildDS(pie.datasets, body.data.data)
                //     })
                // });
            }, (response) => {
                // dispatch(
                //     ({
                //         type: response.status,
                //         payload: response.statusText
                //     })
                // );
            });
    }, [selectedDate]);
}

export default useLoadBalanceEffect;


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

