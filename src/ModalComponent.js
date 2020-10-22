import React, {useState, useEffect} from 'react';
// import Modal from '@material-ui/core/Modal';
import Modal from 'react-bootstrap/Modal'
import { Button, InputLabel, Input, FormControl } from '@material-ui/core'
import './App.css'
const ModalComponent = ({sendUsername}) => {

    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState('')

    const handleClose = () => {
        setOpen(false)
    }
    useEffect(() => {
        setOpen(true)
       
    }, []);

    const getUsername = (userinput) => {
        setUsername(userinput)
    }
    
    const localSendUsername = (event) => {
        event.preventDefault();
        sendUsername(username);
        handleClose();
        
    }
    return (
        <div>
            <Modal show={open}>
                <Modal.Header closeButton className="modal__header">
                    <Modal.Title>Please Enter Username</Modal.Title>
                </Modal.Header>
                <form>
                <Modal.Body>
                    
                    <FormControl className="modal__formControl">
                        <InputLabel>Enter your username ⛑️</InputLabel>
                        <Input  className="modal__input"  onChange={event => getUsername(event.target.value)}></Input>
                        </FormControl>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" color="primary" variant="contained" onClick={localSendUsername}>Ok</Button>
                    </Modal.Footer>
                </form>
                
        </Modal>
        </div>
    );
}

export default ModalComponent;
