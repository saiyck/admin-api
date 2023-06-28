import './App.css';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import MainScreen from './components/MainScreen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ViewUserConversation from './components/ViewUserConversation/ViewUserConversation';

const defaultTheme = createTheme();

function App() {
  // const queryParameters = new URLSearchParams(window.location.search)
  // const type = queryParameters.get("type")
  // const name = queryParameters.get("name")
  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainScreen/>}/>
      <Route path='/view' element={<ViewUserConversation/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
