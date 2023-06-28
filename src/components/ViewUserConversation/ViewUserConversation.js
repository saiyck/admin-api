import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { getAllUserInfo } from '../../Common';
import { Box } from '@mui/material';
export default function ViewUserConversation() {
  const [list,setList] = React.useState([]);
  const [messages,setMessage] = React.useState([]);
  React.useEffect(()=>{
    getAllUserInfo().then((res)=>{
       setList(res.data);
    }).catch((err)=>{
        console.log('err:',err)
    })
  },[])

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" color="inherit" noWrap>
                        View User Conversation
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
<Grid container spacing={2} mt={2}>
<Grid item xs={5} p={2}>
 <List component="nav" aria-label="mailbox folders">
    {
        list.map((item)=> {
            return(
                <>
                <ListItem onClick={()=> setMessage(item.questions)} button>
                <ListItemText primary={item.userId} />
              </ListItem>
              <Divider />
              </>
            )
        })
    }
  {/* <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem> */}
</List>
</Grid>
<Grid item xs={7} height={'100vh'} bgcolor={'lightgray'}>
 {
    messages.map((item)=>{
        return(
        <Typography mr={item.role == 'user' ? 30 : 0} ml={item.role == 'user' ? 0 : 30} borderRadius={2} bgcolor={'white'} p={1} mt={3} textAlign={ item.role == 'user' ? 'start' : 'end'}>
            {item.content}
        </Typography>
        )
    })
 }                
</Grid>
</Grid>
            </main>
        </>
    )
}