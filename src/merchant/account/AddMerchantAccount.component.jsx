import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import {Form, ButtonArea, Icon, Panel, PanelBody, PanelFooter, PanelHeader} from "react-weui";
// import {FormCell, CellHeader, Label, CellBody, Select, CellFooter} from "react-weui";
import {Col, Row, Tooltip, Form, Button} from "react-bootstrap";
import axios from "axios";
import {LoadingOut} from "../../app/store/users";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function GetStepContent({stepIndex, addMerchant, data}) {
    switch (stepIndex) {
        case 0:
            return (<AddNewMerchant addMerchant={addMerchant} newMerchantData={data}/>);
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}

const AddNewMerchant = ({addMerchant, newMerchantData}) => {
    // const [newMerchantData, setNewMerchantData] = React.useState(newMerchantData);
    return (<>
        <br/>
        <Row>
            <Col xs={12} sm={3} lg={{span: 6, offset: 3}} md={8}>
                <Form onSubmit={(event) => addMerchant()}>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Merchant Name
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control value={newMerchantData.name} type="text" placeholder="name for merchant"/>
                        </Col>
                    </Form.Group>

                    <Button className={"btn-block"} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    </>);
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [newMerchantData, setNewMerchantData] = React.useState({
        name: "test"
    });

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addMerchant = (event, newMerchantData) => {
        alert(JSON.stringify(newMerchantData))

        // setNewMerchantData(newMerchantData);
        event.preventDefault();

        // alert()

        /*axios
            .post("/merchant/account/registration",
                {
                    name: name,
                    note_public: note
                }
            )
            .then(response => {

            })
            .catch(error => {
                    console.log("error ", error);
                }
            )
            .finally(() => {
                console.log('merchantAccount ');
            });*/
    };


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel style={{backgroundColor: "#DDE1DC"}}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div style={{backgroundColor: "#DDE1DC"}}>
                        <GetStepContent stepIndex={activeStep} addMerchant={addMerchant} data={newMerchantData}/>

                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
