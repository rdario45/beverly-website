
import { useEffect } from 'react';

const useSetActiveWeekDayEffect = ({ selectedDate, dispatch }) => {
    useEffect(() => {
        dispatch({
            type: "activeDay",
            payload: new Date(selectedDate).getDay() > 0 ? new Date(selectedDate).getDay() - 1 : 0
        })
    }, [selectedDate]);
}

export default useSetActiveWeekDayEffect;

