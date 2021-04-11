
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import UserList from './user';
import Header from './header';
import Home from './home';
//import About from './about';
//import ContactUs from './contact';
//import UserLogin from './login';
//import Register from './signup';
//import ProductList from './Product';
import StateOne from './stateone';
import StateTwo from './statetwo';
import StateSix from './state6';
import StateApiFour from './stateapi4';
import StateApiFive from './stateapi5';
import HookOne from './hook1';
import HookTwo from './hook2';
import HookThree from './hook3';
import HookFour from './hook4';
import HookFive from './hook5';
import MyProps from './props';
import Validation from './validation';

function App() {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={Home} />

      <Route exact path="/statetwo" component={StateTwo} />
      <Route eaxct path="/api5" component={StateApiFive} />
      <Route eaxct path="/api4" component={StateApiFour} />
      <Route eaxct path="/hook1" component={HookOne} />
      <Route exact path="/hook2" component={HookTwo} />
      <Route exact path="/:userid/hook3" component={HookThree}/>
      <Route exact path="/:userid/:city/hook4" component={HookFour}/>
      <Route exact path="/stateone" component={StateOne} />
      <Route exact path="/state6" component={StateSix} />
      <Route exact path="/:id/hook5" component={HookFive}/>
      <Route exact path="/props" component={MyProps}/>
      <Route exact path="/validation" component={Validation}/>


    </HashRouter>
  );
}

export default App;
