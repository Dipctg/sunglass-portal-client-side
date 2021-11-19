import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import MyOrder from './pages/MyOrder/MyOrder';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* 
          <Route path="/users">
            <Users />
          </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/myorder">
            <MyOrder/>
          </PrivateRoute>
            <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
            <Route path="/login">
            <Login/>
          </Route>
            <Route path="/register">
            <Register/>
          </Route>
            <Route path="*">
            <NotFound/>
          </Route>
          </Switch>
        </div>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
