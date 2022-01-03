import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const BasicDatePicker = ({ handleDateChange, selectedDate }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker value={selectedDate} onChange={handleDateChange} />
  </MuiPickersUtilsProvider>
)

export default BasicDatePicker;