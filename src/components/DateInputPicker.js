import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const InputDatePicker = ({ handleDateChange, selectedDate }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker value={selectedDate} onChange={handleDateChange} autoOk={true} />
  </MuiPickersUtilsProvider>
)

export default InputDatePicker;