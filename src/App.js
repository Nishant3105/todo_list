import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer'; 
import {Todos} from './MyComponents/Todos';
import {Todo} from './MyComponents/Todo';


function App() {
  return (
    <>
    <Header title="My todo List" searchBar={true}/>
    <Footer/>
    <Todos/>
    <Todo/>
    </>
  );
}

export default App;
