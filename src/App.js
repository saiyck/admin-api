import './App.css';
import {createTheme,ThemeProvider} from '@mui/material/styles'
import MainScreen from './components/MainScreen';


const defaultTheme = createTheme();

function App() {
  // const queryParameters = new URLSearchParams(window.location.search)
  // const type = queryParameters.get("type")
  // const name = queryParameters.get("name")
  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="App">
      <MainScreen/>
    </div>
    </ThemeProvider>
  );
}

export default App;
