import '../styles/app.scss'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
//import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
//import LuxonUtils from '@date-io/luxon';

function MyApp({ Component, pageProps }) {


return (
<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Component {...pageProps} />
    </MuiPickersUtilsProvider>
   
)
}

export default MyApp
