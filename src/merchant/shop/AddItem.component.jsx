import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Col, Image} from "react-bootstrap";
import AddNewButton from "../../resources/add-new.png";
import {useDispatch} from "react-redux";
import LoadingBar from 'react-redux-loading-bar';
import axios from "axios";
import {LoadingOut} from "../../app/store/users";
import VerticalLinearStepper from "../account/AddMerchantAccount.component";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ShopGridItem = ({name, openModel}) => {
    return (
        <>
            <Col xs={6} sm={3} lg={2} md={3}>
                <center>{name}</center>
                <Image onClick={openModel} src={AddNewButton}
                       className={"img-thumbnail rounded mx-auto d-block"}
                       style={{backgroundColor: "inherit", borderColor: "#abb3bb", cursor: "pointer"}} rounded/>
            </Col>
        </>
    );
}
const AddItemComponent = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [merchantAccount, setMerchantAccount] = React.useState([]);
    const dispatch = useDispatch();
    useEffect(() => {

    });

    const _getMerchantAccount = async (event) => {
        axios.get("/merchant/account")
            .then(response => {
                setMerchantAccount(response.data);
            })
            .catch(error => {
                    console.log("error ", error);
                }
            )
            .finally(() => {
                dispatch(LoadingOut(false));
                console.log('merchantAccount ', merchantAccount);
            });
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ShopGridItem openModel={handleClickOpen} name={"Shop"}/>
            {/*     <Button variant="outlined" color="primary" >
                Open full-screen dialog
            </Button>*/}


            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar} style={{backgroundColor: "#1aad19"}}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Merchant Registration
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <div style={{backgroundColor: "#DDE1DC"}}>
                    <VerticalLinearStepper style={{backgroundColor: "#DDE1DC"}}/>
                </div>
            </Dialog>
        </div>
    );
}
export default AddItemComponent;