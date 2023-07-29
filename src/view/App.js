import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todo/ListTodo.js';
import Home from './Example/Home';
import Nav from './Nav/Nav';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import {
  BrowserRouter,
  Route,
 // Link,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello Quốc Dương . Learn react with my
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <MyComponent/> */}

        {/* <ListTodo/> */}
                      
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser/>
            </Route>

            <Route path="/user/:id">
              <DetailUser/>
            </Route>

            
          </Switch>
  
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
