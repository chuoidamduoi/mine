import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { SectionProps } from '../../utils/SectionProps';
import classNames from 'classnames';


const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}


const stepsTime = [
    {
        label: '7/2020',
        company: 'TIKI',
        steps: [
            {
                label: 'Select campaign settings',
                description: `For each ad campaign that you create, you can control how much
                      you're willing to spend on clicks and conversions, which networks
                      and geographical locations you want your ads to show on, and more.`,
            },
            {
                label: 'Create an ad group',
                description:
                    'An ad group contains one or more ads which target a shared set of keywords.',
            },
        ]

    },
    {
        label: '02/2022',
        company: 'SHOPEE',
        steps: [
            {
                label: 'Create an ad',
                description: `Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.`,
                time: '02/2022',
            },
            {
                label: 'Select campaign settings',
                description: `For each ad campaign that you create, you can control how much
          you're willing to spend on clicks and conversions, which networks
          and geographical locations you want your ads to show on, and more.`,
                time: '02/2022',
            },
            {
                label: 'Create an ad group',
                description:
                    'An ad group contains one or more ads which target a shared set of keywords.',
                time: '02/2022',
            },
            {
                label: 'Create an ad',
                description: `Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.`,
                time: '02/2022',
            },
            {
                label: 'Select campaign settings',
                description: `For each ad campaign that you create, you can control how much
          you're willing to spend on clicks and conversions, which networks
          and geographical locations you want your ads to show on, and more.`,
                time: '02/2022',
            },
            {
                label: 'Create an ad group',
                description:
                    'An ad group contains one or more ads which target a shared set of keywords.',
                time: '02/2022',
            }
        ]
    },
    {
        label: 'now',
        company: 'SENDO',
        steps: [{
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
                  and learn how to enhance your ads using features like ad extensions.
                  If you run into any problems with your ads, find out how to tell if
                  they're running and how to resolve approval issues.`,
            time: 'now',
        }]
    },

];

const VerticalLinearStepper = (
    className,
    children,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
) => {
    const [activeStep, setActiveStep] = React.useState(-1);
    const [activeTime, setActiveTime] = React.useState(0);

    const handleNextTime = () => {
        if (activeTime !== stepsTime.length - 1) {
            setActiveTime((prevActiveTime) => prevActiveTime + 1);
            setActiveStep(-1);
        }
    };

    const handleBackTime = () => {
        setActiveTime((prevActiveTime) => prevActiveTime - 1);
        setActiveStep(-1);
    };

    const handleResetTime = (index) => {
        setActiveTime(index);
        setActiveStep(-1);
    };


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = (index) => {
        if (activeStep === index && activeStep !== -1) setActiveStep(-1);
        else setActiveStep(index);
    };

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner ',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <Box sx={{ maxWidth: "100%", backgroundColor: "#25282C", paddingTop:"40px" }}>
                        <h2> Work experience</h2>

                        <Stepper activeStep={activeTime} orientation="horizontal">
                            {stepsTime.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel onClick={handleResetTime.bind(this, index)} StepIconComponent={"index"}
                                        optional={
                                            <h5 variant="caption" style={{ color: activeTime === index ? "white" : "#9CA9B3" }}>{step.company}</h5>
                                        }
                                    >
                                        <h4 style={{ color: activeTime === index ? "white" : "#9CA9B3" }}> {step.label}</h4>
                                    </StepLabel>
                                </Step>

                            ))}

                        </Stepper>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeTime === 0}
                                onClick={handleBackTime}
                                sx={{ mr: 1 }}
                            >
                                <ArrowCircleLeftOutlinedIcon />
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                            <Button onClick={handleNextTime}>
                                {activeTime === stepsTime.length - 1 ? '' : <ArrowCircleRightOutlinedIcon />}
                            </Button>
                        </Box>
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {stepsTime[activeTime].steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel onClick={handleReset.bind(this, index)} StepIconComponent={"index"}>
                                                <h4 > {step.label}</h4>

                                            </StepLabel>
                                            <StepContent>
                                                <Typography className='normal-text'><p>{step.description}</p></Typography>
                                                {/* <Box sx={{ mb: 2 }}>
                                            <div className='btn-right'>
                                                {index !== 0 && <Button
                                                    variant="contained"
                                                    onClick={handleBack}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    <ArrowCircleUpOutlinedIcon />
                                                </Button>
                                                }
                                                {<Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    {index === stepsTime[activeTime].steps.length - 1 ? <CancelOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
                                                </Button>
                                                }

                                            </div>
                                        </Box> */}
                                            </StepContent>
                                        </Step>
                                    ))}
                                </Stepper>

                            </Typography>

                        </React.Fragment>

                    </Box>
                </div>
            </div>
        </section>
    );
}


VerticalLinearStepper.propTypes = propTypes;
VerticalLinearStepper.defaultProps = defaultProps;

export default VerticalLinearStepper;