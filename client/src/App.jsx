import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import Leads from './components/Leads';
import Opportunities from './components/Opportunities';
import Reports from './components/Reports';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/customers" component={Customers} />
          <PrivateRoute path="/leads" component={Leads} />
          <PrivateRoute path="/opportunities" component={Opportunities} />
          <PrivateRoute path="/reports" component={Reports} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;