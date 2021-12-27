import DateFnsUtils from '@date-io/date-fns';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default function BeverlyTimePicker({ handleDateChange, selectedHour }) {
    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker value={selectedHour} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}