//import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';





function App() {
  return (
    <div className="App">

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
     Friends' online chat
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

<Grid container spacing={2}>
{/* <Grid item xs={12}> */}

  {/* </Grid> */}
  <Grid item xs={4}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Chit-chat"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Rachel Green
              </Typography>
              {" — Have you seen Monica with that haircut? Awfull, isn't it? Poor thing..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rachel 30th BDay Party"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Ross Geller, Monica Geller
              </Typography>
              {" — Are you kidding me?! Of course I'll be there!"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Parle France"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Joey Tribbiani
              </Typography>
              {' — Did you read that French script, that I gave you yesterday? '}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rehearsals"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Producer
              </Typography>
              {' — I can come on Monday at about 3pm. Is it fine for you? '}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Proposal"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ross Geller
              </Typography>
              {' — when are you going to propose Rachel? what are you waiting for? '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  </Grid>
  <Grid item xs={8}>
    {/* <Item>xs=4</Item> */}
  </Grid>
  <Grid item xs={8}>
    {/* <Item>xs=4</Item> */}
  </Grid>
  <Grid item xs={4}>
    <Box 
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '45ch' },
  }}
  noValidate
  autoComplete="off">
        <TextField 
            id="outlined-textarea"
            label="Enter your message"
            placeholder="Enter your message"
            multiline
        />
     <Button variant="text"><SendIcon/></Button>
        </Box>
  </Grid>
</Grid>

     

       
     

    
      </div>
);
}

export default App;
