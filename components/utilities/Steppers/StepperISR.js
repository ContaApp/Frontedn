
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container, Row, Col} from 'react-bootstrap';

const steps = [
  'ISR Cobranza',
  'ISR Deducciones',
  'ISR Retenciones',
  'Resumen ISR',
];

export default function StepperISR(props) {
    const numActive = parseInt(props.num);
  return (
    <Col className="container-Stepper">
    <Box sm={{ width: '50%', height: 'auto'}} >
      <Stepper activeStep={numActive} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
   </Col>
  );
}
