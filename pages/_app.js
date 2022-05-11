import '../styles/app.scss';
import ContextInputsCardsProvider from '../contexts/ContextInputsCards';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import esLocale from 'date-fns/locale/es';
import DateFnsUtils from '@date-io/date-fns';


function MyApp({ Component, pageProps }) {
return (
  <ContextInputsCardsProvider>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <Component {...pageProps} />
    </MuiPickersUtilsProvider>
    </ContextInputsCardsProvider>

  
)
}

export default MyApp
