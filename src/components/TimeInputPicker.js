import DateFnsUtils from '@date-io/date-fns';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const InputTimePicker = ({ handleDateChange, selectedHour}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <TimePicker value={selectedHour} onChange={handleDateChange} autoOk={true}/>
  </MuiPickersUtilsProvider>
)

export default InputTimePicker;