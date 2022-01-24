import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//styles
import './App.css'

//pages and components
import Dashboard from './pages/Dashboard/Dashboard'
import Create from './pages/Create/Create'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/projects/:id">
              <Project />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
