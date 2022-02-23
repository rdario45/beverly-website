import { useEffect } from 'react';
import API from "../../api/ApiController";

const useLoadAgendas = (selectedDate, dispatch) => {   
    useEffect(() => { 
        const calcWeekPeriod = (selectedDate) => {
            const startDate = new Date(selectedDate.toDateString());
            startDate.setDate(startDate.getDate() - selectedDate.getDay());
            const finalDate = new Date(startDate.toDateString());
            finalDate.setDate(startDate.getDate() + 6);
            return [startDate, finalDate];
        }
        const [startDate, finalDate] = calcWeekPeriod(selectedDate);    
        const buildWeek = (agendas) => {
            const filter = (agenda, offset) => {
                const sDate = new Date(selectedDate.toDateString());
                sDate.setDate(sDate.getDate() - sDate.getDay() + offset);
                return agenda.fecha === sDate.getTime().toString();
            }

            return {
                Monday: agendas.filter(agenda => filter(agenda, 1)),
                Tuesday: agendas.filter(agenda => filter(agenda, 2)),
                Wednedsay: agendas.filter(agenda => filter(agenda, 3)),
                Thursday: agendas.filter(agenda => filter(agenda, 4)),
                Friday: agendas.filter(agenda => filter(agenda, 5)),
                Saturday: agendas.filter(agenda => filter(agenda, 6)),
            }
        }

        API.findAgenda(
            new Date(startDate.toDateString()).getTime().toString(),
            new Date(finalDate.toDateString()).getTime().toString()
        ).then((body) => {
            dispatch({
                type: "currentWeek",
                payload: buildWeek(body.data)
            });

            dispatch({
                type: "activeDay",
                payload: new Date(selectedDate).getDay() > 0 ? new Date(selectedDate).getDay() - 1 : 0
            })
        });

    }, [selectedDate]);
}

export default useLoadAgendas;