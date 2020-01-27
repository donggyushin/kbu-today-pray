import React, { Dispatch } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerStateType } from '../../types/reducer';
import { dialogOff } from '../../actions/dialog'



interface IDialogOffDispatch {
    type: string
}

export default function AlertDialog() {

    const dialogReducer = useSelector((state: ReducerStateType) => state.dialog)
    const dialogOffDispatch = useDispatch<Dispatch<IDialogOffDispatch>>()


    const handleClose = () => {
        dialogOff(dialogOffDispatch)
    };

    const agreeButtonClicked = () => {
        dialogReducer.callBack()
        dialogOff(dialogOffDispatch)
    }

    const disagreeButtonClicked = () => {
        dialogOff(dialogOffDispatch)
    }

    return (
        <div>
            <Dialog
                open={dialogReducer.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{dialogReducer.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogReducer.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={disagreeButtonClicked} color="primary">
                        Disagree
          </Button>
                    <Button onClick={agreeButtonClicked} color="primary" autoFocus>
                        Agree
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}