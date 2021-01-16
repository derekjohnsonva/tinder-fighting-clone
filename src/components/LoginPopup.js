import React from 'react'
import { Dialog, Button,DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import {signInWithGoogle} from "../services/firebase";

const GoogleButton = withStyles({
    root: {
        '&:hover': {
            
        },
        background: 'white',
        borderRadius: 10,
        border: 0,
        color: '#FF8E53',
        height: 54,
        width: 352,
    },
    label: {
        fontSize: 17,
        fontWeight: 400,
        textTransform: 'capitalize',
    },
    })(Button);

const useStyles = makeStyles(theme => ({
    div: {
        display:"flex",
    },
    dialogWrapper: {
        width: "440px",
        alignItems: "center",
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
    },
    close__button: {
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: "5px",
    },
    google: {
        width: "100%",
        height: "60"
    },
}))

export default function LoginPopup(props) {
    const { title, openPopup, setOpenPopup } = props;   
    const classes = useStyles();

    return (

        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <div className={classes.close__button}>
                <Button
                    color="secondary"
                    onClick={()=>{setOpenPopup(false)}}>
                    <CloseIcon/>
                </Button>
            </div>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h4" component="div" style={{ flexGrow: 1, fontWeight: 600 }}>
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent >
                <div className={classes.google}>
                    <GoogleButton
                        variant="outlined"
                        onClick={()=>{signInWithGoogle()}}>
                        Log In With Google
                    </GoogleButton>
                </div>
            </DialogContent>
        </Dialog>
    )
}