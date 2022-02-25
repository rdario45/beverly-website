import DateFnsUtils from '@date-io/date-fns';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const InputTimePicker = ({ handleDateChange, selectedHour }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <TimePicker value={selectedHour} onChange={handleDateChange} />
  </MuiPickersUtilsProvider>
)

export default InputTimePicker;