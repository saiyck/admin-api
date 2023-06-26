import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import './MainScreen.css';
import { handlePostPrompt } from '../Common';
export default function MainScreen() {
    const [open, setOpen] = React.useState(false);
    const [copy, setCopy] = React.useState(false);
    const [message,setMessage] = React.useState('');
    const [id,setId] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text)
        setCopy(true)
        handleClose()
    }

    const handleSubmit = () => {
      if(message != ''){
        handlePostPrompt(message).then((res)=>{
          console.log('response',res);
          setId(res.data._id);
          handleOpen()
        }).catch((err)=> {
            console.log('error:',err);
        })
      }
    }


    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Admin Portal
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 6,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h4"
                            variant="h4"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Create Online Test
                        </Typography>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <TextField
                                    id="outlined-multiline-size-large"
                                    label="System prompt"
                                    multiline
                                    rows={6}
                                    placeholder="Please enter prompt message"
                                    fullWidth
                                    onChange={(e)=> setMessage(e.target.value)}
                                />
                                <CardActions sx={{ mt: 2 }}>
                                    <Button onClick={handleSubmit} variant='contained' size="small">Create Test Link</Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Container>
                </Box>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Your test link has been created
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            please click on below url to copy
                        </Typography>
                        <Button onClick={() => handleCopyText(`${process.env.REACT_APP_USER_APP_URL}?id=${id}`)} size="small">{`${process.env.REACT_APP_USER_APP_URL}?id=${id}`}</Button>
                    </Box>
                </Modal>
                <Snackbar
                    open={copy}
                    onClose={() => setCopy(false)}
                    autoHideDuration={2000}
                    message="Copied to clipboard"
                />
            </main>
        </>
    )
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
