import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import img1 from '../../images/p1.jpg'
import img2 from '../../images/download.jpg'
import stepper1 from '../../images/stepper1.jpeg'
import stepper2 from '../../images/stepper2.jpeg'
import stepper3 from '../../images/stepper3.jpeg'
import stepper4 from '../../images/stepper4.jpeg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Web Dashboard',
    imgPath:stepper1,
  },
  {
    label: 'App Home Screen',
    imgPath:stepper2,
  },
  {
    label: 'App Booking',
    imgPath:stepper3,
  },
  {
    label: 'Map',
    imgPath:stepper4,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxHeight:350, maxWidth: 350, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 100,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: 600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <MenuIcon />
            ) : (
              <MenuIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <MenuIcon />
            ) : (
              <MenuIcon />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

// import React from 'react'
// import stepper1 from '../../images/stepper1.jpeg'
// import { Player } from 'video-react';
// import { makeStyles } from '@material-ui/core/styles';
// import vid1 from '../../images/vid1.mp4'
// const useStyles = makeStyles((theme) => ({
//   root:{
//     maxwidth:300,
//     maxheight:300,
//   }
// }))
// function Stepper() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <Player>
//       <source src={vid1} />
//     </Player>
//     </div>
//   )
// }

// export default Stepper
