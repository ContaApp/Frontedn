import MultiStep from 'react-multistep';
import DashboardHome from '../../pages/dashboardHome';
import Home from '../../pages/index';

const steps = [
    { name: 'ISR' ,component: <DashboardHome/> },
    { name: 'Home' ,component: <Home /> },
    { name: 'Home' ,component: <DashboardHome/> },
    {name: 'Home' , component: <DashboardHome /> }
  ]

  // custom styles
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }

function MultiStepBar() {
    return (  
        <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    );
}

export default MultiStepBar;