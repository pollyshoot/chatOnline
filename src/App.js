import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function App() {
  return (
    <div className="App">
      <header className="App-header">
<Box 
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
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
       
      </header>
     
      </div>
);
}

export default App;
