import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { ModalFooter, ModalHeader } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Signup from "../components/Signup"
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';

import './card.css';
import { Paper } from '@mui/material';
import { red } from '@mui/material/colors';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1043,
    height: 498,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};


// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: "white", borderRadius: '20px' }} >
                <IconButton sx={{ color: '#254B70' }} aria-label="Login / Signup">
                    <AccountCircleIcon />
                </IconButton> <Typography color='#254B70'>Login / Signup</Typography>
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='background_login '>

                    <Grid container spacing={2} alignItems="center">
                        <Grid xs={6} md={6}>

                        </Grid>
                        <Grid xs={6} md={6} display="flex" justifyContent="center" textAlign="center" alignItem="center">

                            <div className='model_content'>
                                <Box p={4}
                                    component="form"

                                    noValidate
                                    autoComplete="off"
                                >
                                    <ModalHeader style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Login / Signup</ModalHeader>
                                    <FormLabel>
                                        
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="number" className="login_lable">Enter Your Email</label>
                                                <input type="text" name="to" id="number" fontSize='9px' className="phone_input" placeholder="Enter Email" />
                                            </div>
                                        </FormControl>
                                        
                                        <FormControl sx={{ m: 1, minWidth: 250, }}>

                                            <div className="login_input" width='50px' height='10px' >
                                                <label for="text" className="login_lable">Password</label>
                                                <input type="password" name="to" id="number" fontSize='9px' className="phone_input" placeholder="*******" />
                                            </div>
                                        </FormControl>

                                    </FormLabel>


                                </Box>
                                
                                <Box px={4}>
                                    <Button variant="contained" onClick={handleClose} disableElevation fontSize="14px" sx={{ width: "260px", borderRadius: "20px", border: "2px solid #0000DC", backgroundColor: "#006FFF" }}>
                                        Login
                                    </Button>
                                    <Signup />


                                    <Typography pt={8} color='black' fontSize='10px' >By proceeding, you agree to Travvolt <Link href="#" underline="always" color="#FF5733">
                                        {'Privacy Policy'}
                                    </Link> , <Link href="#" underline="always" color="#FF5733">
                                            {'User Agreement'}
                                        </Link> and <Link href="#" underline="always" color="#FF5733">
                                            {'Terms of Service'}
                                        </Link>
                                    </Typography>
                                </Box>

                            </div>



                        </Grid>

                    </Grid>
                </Box>



            </Modal>
        </div>
    );
}