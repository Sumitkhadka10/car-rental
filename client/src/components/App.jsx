import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContexts'; 
import Signup from './signup/signup';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from './login/login';
import ForgotPassword from './forgotpassword';


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path = "/signup" component={Signup}/>
          <Route path ="/login" component = {LoginPage}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
        </Switch>
      </AuthProvider>
      </Router>
      <App />
      <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);
