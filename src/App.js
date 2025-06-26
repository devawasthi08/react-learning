import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import NamedList from './components/NamedList';
import StyleSheet from './components/StyleSheet';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterone from './components/HookCounterone';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import CounterOne from './components/CounterOne';
import CounterOn from './components/CounterOn';
import CounterTwo from './components/CounterTwo';
import TodoList from './components/todo/todo';

function App() {
  return (
    <div className="App">
      {
        <TodoList/>
       // <><CounterTwo /><CounterOn />
       
        //<CounterOne />
        //<DataFetching/>
       // <IntervalHookCounter/>
       // <MouseContainer/>
        //<HookMouse/>
       // <HookCounterone/>
       //< HookCounterTwo/>
       // <HookCounter/>
        // <ClassCounter/>
        // <StyleSheet/>
        // <NamedList/>
        // <EventBind/>
        // <FunctionClick/>
      //  <Counter/> 
      /* <Greet name="Dev"/>
      <Greet name="San"/>
      <Greet/>
      <Welcome/>
      <Hello/>
      <Message/>
      */}
    </div>
  );
}

export default App;
