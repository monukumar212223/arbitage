import { makeStyles } from "@material-ui/core";
import {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import HomePage from "./pages/Homepage"
import CoinPage from "./pages/CoinPage"
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
function App() {
  const classes=useStyles();
  return (
    <BrowserRouter>
    <div className={classes.app}>
      <Header />
      < exact Route  path="/" component={HomePage} />
      <exact exact path="/coins/id:" component={CoinPage} />      
    </div>
    </BrowserRouter>   
  );
}

export default App;
