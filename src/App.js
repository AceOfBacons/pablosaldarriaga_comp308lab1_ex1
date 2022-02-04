import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import auth  from './authorization/auth';
import Comment from './Comment/Comment';
import Result from './Result/Result';
import Login from './LoginLogic/Login';


function App() {
  return (
           <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Login}></Route>

        <Route path="/comment" render={data=>auth.getLogInStatus()?(
        <Comment {...data}></Comment>):
          (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>

        <Route path="/result" render={data=>auth.getLogInStatus()?(
        <Result {...data}></Result>):
        (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          
        
          {/* <Route exact path="/loginmaterial" component={MaterialExample}></Route> */}
          {/* <Route exact path="/register" component={Register}></Route> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
