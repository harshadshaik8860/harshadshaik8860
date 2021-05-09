
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
import HookFive from './components/hook5';
import MyProps from './props';
import Validation from './validation';
import Example from './example';
import Example2 from './example2';
import StateAPI1 from './StateAPI1';
import StateAPI2 from './StateAPI2';
import Error from './components/error';
import ErrorBoundries from './components/Errorboundries';
import Counter from './components/counter';
import Hovercounter from './components/hovercounter';
import RenderProps from './components/RenderProps';
import RenderProps2 from './components/RenderProps2';
import Counter2 from './components/Counter2';
import HoverCounter2 from './components/HoverCounter2';
import {UserProvider} from './components/UserContext';
import ComponentC from './components/ComponentF';
import HTTPGet from './components/HTTPGet';
import PostForm from './components/PostForm';
import { UseStateClassComponent } from './Hooks/UseStateClassComponent';
import UseStateFunctionHook from './Hooks/UseStateFunctionHook';
import UseStateFunctionHooktwo from './Hooks/UseStateFunctionHooktwo';
import UseStateFunctionHookthree from './Hooks/UseStateFunctionHookthree';
import UseStateFuntionHookfour from './Hooks/UseStateFuntionHookfour';

function App() {
  return (
    <div className="text-center">
<UserProvider value="harshad">
  <ComponentC />
 </UserProvider>
 {/* <PostForm />
 <HTTPGet /> */}
 <UseStateClassComponent />
 <UseStateFunctionHook />
 <UseStateFunctionHooktwo />
 <UseStateFunctionHookthree/>
 <UseStateFuntionHookfour/>
 
 </div>

    
//     <HashRouter>
      
//       <Header />
      
//       <Route exact path="/" component={Home} />
//       <Route exact path="/api1" component={StateAPI1}/>
//       <Route exact path="/api2" component={StateAPI2}/>
//       <Route exact path="/statetwo" component={StateTwo} />
//       <Route eaxct path="/api5" component={StateApiFive} />
//       <Route eaxct path="/api4" component={StateApiFour} />
//       <Route eaxct path="/hook1" component={HookOne} />
//       <Route exact path="/hook2" component={HookTwo} />
//       <Route exact path="/:userid/hook3" component={HookThree}/>
//       <Route exact path="/:userid/:city/hook4" component={HookFour}/>
//       <Route exact path="/stateone" component={StateOne} />
//       <Route exact path="/state6" component={StateSix} />
//       <Route exact path="/:id/hook5" component={HookFive}/>
//       <Route exact path="/props" component={MyProps}/>
//       <Route exact path="/validation" component={Validation}/>
//       <Example name="harhasd"/>
//       <Example2  name="welcome" proname="harshad"/>

      
      
// <ErrorBoundries>
// <Error heroName="iron man"/>
// </ErrorBoundries>
// <ErrorBoundries>
// <Error heroName="Thor"/>
// </ErrorBoundries>
// <ErrorBoundries>
// <Error heroName="joker"/>
// </ErrorBoundries>



//  {/* if any thing with in the opening tag and closing tag we need pass props as children 
//  <RenderProps2 render={ (count , incrementCounter)=>( <Counter2 count={count} incrementcount={incrementCounter}/>)
// }></RenderProps2>
// <RenderProps2 render={ (count , incrementCounter)=>( <HoverCounter2 count={count} incrementcount={incrementCounter}/>)
// }></RenderProps2>*/}
 
// <RenderProps2 render={ (count , incrementCounter)=>( <Counter2 count={count} incrementcount={incrementCounter}/>)
// }/>
// <RenderProps2 render={ (count , incrementCounter)=>( <HoverCounter2 count={count} incrementcount={incrementCounter}/>)
// }
// />
//     <Counter name="harshad" />
//     <Hovercounter/>
//     <RenderProps render={(isLoggedIn)=> isLoggedIn ? "harshad" : "Gust"}/>
    
//     </HashRouter>


    
  );
}

export default App;
